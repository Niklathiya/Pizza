import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import React, { useState } from 'react'

const Singleproduct = () => {
    const [key, setKey] = useState('tab2')

    return (
        <div>
            <section>
                <div className='product'>
                    <div className='product_side'>
                        <img src='../images/Paneer_Makhni.png' />
                    </div>
                    <div className='product_detail'>
                        <h3>Paneer Makhni</h3>
                        <h6>$9.00</h6>
                        <div className='product_border'>
                            <div className='product_selection_space'>
                                <p className='product_label'><label>Size</label></p>
                                <div className='product_detail_check'>
                                    <div className='selection_space'>
                                        <input type="checkbox" id="size1" />
                                        <label className='product_select bg_selection' htmlFor="size1">Regular $9.00</label>
                                    </div>
                                    <div className='selection_space'>
                                        <input type="checkbox" id="size2" />
                                        <label className='product_select bg_selection' htmlFor="size2">Medium $11.00</label>
                                    </div>
                                    <div className='selection_space'>
                                        <input type="checkbox" id="size3" />
                                        <label className='product_select bg_selection' htmlFor="size3">Large $14.00</label>
                                    </div>
                                    <div className='selection_space'>
                                        <input type="checkbox" id="size4" />
                                        <label className='product_select bg_selection' htmlFor="size4">Xl $18.00</label>
                                    </div>
                                </div>
                            </div>
                            <div className='product_selection_space'>
                                <p className='product_label'><label>Crust</label></p>
                                <div className='product_detail_check'>
                                    <div className='selection_space'>
                                        <input type="checkbox" id="crust1" />
                                        <label className='product_select bg_selection' htmlFor="crust1">new hand tossed $4.00</label>
                                    </div>
                                    <div className='selection_space'>
                                        <input type="checkbox" id="crust2" />
                                        <label className='product_select bg_selection' htmlFor="crust2">cheese burst $6.00</label>
                                    </div>
                                    <div className='selection_space'>
                                        <input type="checkbox" id="crust3" />
                                        <label className='product_select bg_selection' htmlFor="crust3">wheat thin crust $9.00</label>
                                    </div>
                                </div>
                            </div>
                            <div className='product_selection_space'>
                                <p className='product_label'><label>Toppings</label></p>
                                <div className='product_detail_check'>
                                    <div className='selection_space'>
                                        <input type="checkbox" id="toppings1" />
                                        <label className='product_select bg_selection' htmlFor="toppings1">onions $0.50</label>
                                    </div>
                                    <div className='selection_space'>
                                        <input type="checkbox" id="toppings2" />
                                        <label className='product_select bg_selection' htmlFor="toppings2">capsicum $0.50</label>
                                    </div>
                                    <div className='selection_space'>
                                        <input type="checkbox" id="toppings3" />
                                        <label className='product_select bg_selection' htmlFor="toppings3">paneer $1.00</label>
                                    </div>
                                    <div className='selection_space'>
                                        <input type="checkbox" id="toppings4" />
                                        <label className='product_select bg_selection' htmlFor="toppings4">olives $1.00</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='product_price'>
                            <div className='product_price_align'>
                                <h5>Product total</h5>
                                <p>$9.00</p>
                            </div>
                            <div className='product_price_align'>
                                <h5>Options total</h5>
                                <p>$0.00</p>
                            </div>
                            <div className='product_price_align'>
                                <h5>Grand total</h5>
                                <p>$9.00</p>
                            </div>
                        </div>
                        <div className='product_form_submit'>
                            <input type="number" min="1" />
                            <button>add to cart</button>
                        </div>
                        <div className='product_category'>
                            <p>category:</p>
                            <p>&nbsp;pizza</p>
                        </div>
                    </div>
                </div>

                <div className="product_description">
                    <Tabs key={key} onSelect={(key) => setKey(key)}>
                        <TabList className="tablist">
                            <Tab eventkey="tab1"><h6>description</h6></Tab>
                            <Tab eventkey="tab2"><h6>reviews</h6></Tab>
                        </TabList>
                        <TabPanel className="tabpanel">
                            <p>
                                Tomato sauce, mozzarella, sun dried tomatoes, feta cheese, baby spinach, cherry tomatoes, pesto swirl. If you want your 20″ pizza cut into 12 pieces, write it here! We can cut it the regular 8 or 12 pieces for easier sharing.
                            </p>
                        </TabPanel>
                        <TabPanel className="tabpanel">
                            <p>There are no review yet</p>
                            <h4>be the first to review</h4>

                            <form className='product_review_form'>
                                <p><label>Your review*</label></p>
                                <textarea rows="4" cols="160">
                                </textarea>
                                <div className='product_form_align'>
                                    <div>
                                        <p><label>Name*</label></p>
                                        <input type="text" />
                                    </div>
                                    <div>
                                        <p><label>Email*</label></p>
                                        <input type="email" />
                                    </div>
                                </div>
                                <button className='review_button'>submit</button>
                            </form>
                        </TabPanel>
                    </Tabs>
                </div>
            </section>
        </div>
    )
}

export default Singleproduct
