import React, { Component } from 'react';
import UserLayout from '../../../hoc/user';

import FormField from '../../utils/form/formField';
import { update, generateData, isFormValid, populateOptionFields,resetFields} from '../../utils/form/formActions';
import FileUpload from '../../utils/form/fileUpload';

import { connect } from 'react-redux';
import { getBrands, getCategories, addProduct, clearProduct } from '../../../actions/productsActions';


class AddProduct extends Component {

    state = {
        formError:false,
        formSuccess:false,
        formData:{
            name: {
                element: 'input',
                value: '',
                config:{
                    label: 'Product name',
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            description: {
                element: 'textarea',
                value: '',
                config:{
                    label: 'Product description',
                    name: 'description_input',
                    type: 'text',
                    placeholder: 'Enter your description'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            shortDescription: {
                element: 'textarea',
                value: '',
                config:{
                    label: 'Short product description',
                    name: 'short description_input',
                    type: 'text',
                    placeholder: 'Enter your description'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            price: {
                element: 'input',
                value: '',
                config:{
                    label: 'Product price',
                    name: 'price_input',
                    type: 'number',
                    placeholder: 'Enter your price'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            brand: {
                element: 'select',
                value: '',
                config:{
                    label: 'Product Brand',
                    name: 'brands_input',
                    options:[]
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            shipping: {
                element: 'select',
                value: '',
                config:{
                    label: 'Shipping',
                    name: 'shipping_input',
                    options:[
                        {key:true,value:'Yes'},
                        {key:false,value:'No'},
                    ]
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            available: {
                element: 'select',
                value: '',
                config:{
                    label: 'Available, in stock',
                    name: 'available_input',
                    options:[
                        {key:true,value:'Yes'},
                        {key:false,value:'No'},
                    ]
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            category: {
                element: 'select',
                value: '',
                config:{
                    label: 'Wood material',
                    name: 'wood_input',
                    options:[]
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            publish: {
                element: 'select',
                value: '',
                config:{
                    label: 'Publish',
                    name: 'publish_input',
                    options:[
                        {key:true,value:'Public'},
                        {key:false,value:'Hidden'},
                    ]
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showlabel: true
            },
            images:{
                value:[],
                validation:{
                    required: false
                },
                valid: true,
                touched: false,
                validationMessage:'',
                showlabel: false
            }
        }
    }


    updateFields = (newFormData) => {
        this.setState({
            formData: newFormData
        })
    }

    updateForm = (element) => {
        const newFormData = update(element,this.state.formData,'products');
        this.setState({
            formError: false,
            formData: newFormData
        })
    }

    resetFieldHandler = () => {
        const newFormData = resetFields(this.state.formData,'products');

        this.setState({
            formData: newFormData,
            formSuccess:true
        });
        setTimeout(()=>{
            this.setState({
                formSuccess: false
            },()=>{
                this.props.dispatch(clearProduct())
            })
        },3000)
    }

    submitForm= (event) =>{
        event.preventDefault();
        
        let dataToSubmit = generateData(this.state.formData,'products');
        let formIsValid = isFormValid(this.state.formData,'products')

        if(formIsValid){
            this.props.dispatch(addProduct(dataToSubmit)).then(()=>{
                if( this.props.products.addProduct.success){
                    this.resetFieldHandler();
                }else{
                    this.setState({formError: true})
                }
            })
        } else {
            this.setState({
                formError: true
            })
        }
    }


    componentDidMount(){
        const formData = this.state.formData;

        this.props.dispatch(getBrands()).then( response => {
            const newFormData = populateOptionFields(formData,this.props.products.brands,'brand');
            this.updateFields(newFormData)
        })

        this.props.dispatch(getCategories()).then( response => {
            const newFormData = populateOptionFields(formData,this.props.products.categories,'category');
            this.updateFields(newFormData)
        })
    }

    imagesHandler = (images) => {
        const newFormData = {
            ...this.state.formData
        }
        newFormData['images'].value = images;
        newFormData['images'].valid = true;

        this.setState({
            formData:  newFormData
        })
    }

    render() {
        return (
            <UserLayout>
                <div>
                    <h1>Add product</h1>
                    
                    <form onSubmit={(event)=> this.submitForm(event)}>

                        <FileUpload
                            imagesHandler={(images)=> this.imagesHandler(images)}
                            reset={this.state.formSuccess}
                        />

                        <FormField
                            id={'name'}
                            formData={this.state.formData.name}
                            change={(element) => this.updateForm(element)}
                        />

                        <FormField
                            id={'description'}
                            formData={this.state.formData.description}
                            change={(element) => this.updateForm(element)}
                        />

                        <FormField
                            id={'shortDescription'}
                            formData={this.state.formData.shortDescription}
                            change={(element) => this.updateForm(element)}
                        />

                         <FormField
                            id={'price'}
                            formData={this.state.formData.price}
                            change={(element) => this.updateForm(element)}
                        />

                        <div className="form_devider"></div>

                        <FormField
                            id={'brand'}
                            formData={this.state.formData.brand}
                            change={(element) => this.updateForm(element)}
                        />

                        <FormField
                            id={'shipping'}
                            formData={this.state.formData.shipping}
                            change={(element) => this.updateForm(element)}
                        />

                         <FormField
                            id={'available'}
                            formData={this.state.formData.available}
                            change={(element) => this.updateForm(element)}
                        />

                        <div className="form_devider"></div>

                        <FormField
                            id={'category'}
                            formData={this.state.formData.category}
                            change={(element) => this.updateForm(element)}
                        />

                        <div className="form_devider"></div>

                        <FormField
                            id={'publish'}
                            formData={this.state.formData.publish}
                            change={(element) => this.updateForm(element)}
                        />

                        {this.state.formSuccess ?
                            <div className="form_success">
                                Success
                            </div>
                        :null}

                        {this.state.formError ?
                            <div className="error_label">
                                Please check your data
                                        </div>
                            : null}
                        <button onClick={(event) => this.submitForm(event)}>
                            Add product
                        </button>


                    </form>

                </div>
            </UserLayout>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}


export default connect(mapStateToProps)(AddProduct);