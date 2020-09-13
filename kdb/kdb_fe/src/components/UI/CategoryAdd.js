import React from 'react'

class CategoryAdd extends React.Component {
  render() {
    return (
      <div className = 'container'>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" className="form-control" placeholder="Enter category name"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default CategoryAdd
