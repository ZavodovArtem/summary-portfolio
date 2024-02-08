import './Form.css'
import formLine from '../img/form-line.svg'


function Form() {
    return (
        <div className='photoBody'>
            <div className="form">
                <p className='form-p'>Let's sign up!</p>
                <img src={formLine}  />
                <div className='form-mail'>
                    <form className='form-action' action="/action_page.php">
                    {/* <label className='form-action--label'>First Name</label> */}
                    <input className='form-action--name' type="text"id="fname"name="firstname"placeholder="Your name.."/>
                    {/* <label>Last Name</label> */}
                    <input className='form-action--name' type="text"id="lname" name="lastname" placeholder="Your last name.."/>


                    {/* <label>Email</label> */}
                    <input className='form-action--mail' type="email"id="email"name="email"placeholder="Your email"/>


                    {/* <label>Subject</label> */}
                    <textarea className='form-action--text' id="subject"name="subject"placeholder="Write something.."></textarea>
                    <input className='form-action--sub' type="submit"value="Submit"/>
                    </form>
                </div>
            </div>
        </div>

)};

export default Form