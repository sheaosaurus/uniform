import React, { Component } from 'react';

import FormField from '../../utils/form/formField';
import { update, generateData, isFormValid,resetFields} from '../../utils/form/formActions';

import { connect } from 'react-redux';
import { getCategories, addCategory } from '../../../actions/productsActions';

class ManageCategories extends Component {

    state = {
        formError:false,
        formSuccess:false,
        formData:{
            name: {
                element: 'input',
                value: '',
                config:{
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter the cateogry'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
        }
    }

    showCategoryItems = () => (
        this.props.products.categories ?
            this.props.products.categories.map((item,i)=>(
                <div className="category_item" key={item._id}>
                    {item.name}
                </div>
            ))
        :null
    )

    updateForm = (element) => {
        const newFormData = update(element,this.state.formData,'categories');
        this.setState({
            formError: false,
            formData: newFormData
        });
    }

    resetFieldsHandler = () =>{
        const newFormData = resetFields(this.state.formData,'categories');

        this.setState({
            formData: newFormData,
            formSuccess:true
        });
    }

    submitForm= (event) =>{
        event.preventDefault();
        
        let dataToSubmit = generateData(this.state.formData,'categories');
        let formIsValid = isFormValid(this.state.formData,'categories')
        let existingCategories = this.props.products.categories;

        if(formIsValid){
            this.props.dispatch(addCategory(dataToSubmit,existingCategories)).then(response=>{
                if(response.payload.success){
                    this.resetFieldsHandler();
                }else{
                    this.setState({formError:true})
                }
            })
        } else {
            this.setState({
                formError: true
            })
        }
    }


    componentDidMount(){
        this.props.dispatch(getCategories());
    }


    render() {
        return (
            <div className="admin_category_wrapper">
            <h1>Category</h1>
            <div className="admin_two_column">
                <div className="left">
                    <div className="brands_container">
                        {this.showCategoryItems()}
                    </div>
                </div>
                <div className="right">
                    
                <form onSubmit={(event)=> this.submitForm(event)}>

                     <FormField
                        id={'name'}
                        formData={this.state.formData.name}
                        change={(element) => this.updateForm(element)}
                    />


                    {this.state.formError ?
                        <div className="error_label">
                            Please check your data
                        </div>
                        : null}
                    <button onClick={(event) => this.submitForm(event)}>
                        Add cateogry
                    </button>

                </form>

                </div>

            </div>
        </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}


export default connect(mapStateToProps)(ManageCategories);
