import React from 'react'
import './ContacStyles.css';


const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="form-container">

                    <form>
                    <h1><span>Conatct</span> Us</h1>

                        <div>
                             <laabel>Name</laabel>
                            <input type="text" placeholder="Name" />
                        </div>

                        <div>
                             <laabel>Email</laabel>
                             <input type="email" placeholder="Email" />
                        </div>


                        <div>
                             <laabel>Message</laabel>
                             <textarea rows="10" cols="40" placeholder="Message" />
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Contact
