import "./write.css";

function Write() {
  return (
    <div className="write"> 
     <form className="writeForm">
        <img
          className="writeImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fa fa-plus" aria-hidden="true"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input 
            type="text" 
            placeholder="Title" 
            className="writeInput" 
            autoFocus={true}
            />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
     </form>
    </div>
  )
}

export default Write
