import React from 'react'
import './directory.styles.scss'
import MenuItem from '../menu-items/menu-items.component'
import {connect} from 'react-redux'
import {selectDirectorySections} from '../../redux/directory/directory.selectors'
import {createStructuredSelector} from 'reselect'

const Directory =  ({sections}) => {
    
    return (
          <div className="directory-menu">
            {
              sections.map(({id , ...otherProps})=>(
                <MenuItem key={id} {...otherProps}></MenuItem>
              ))
            }
          </div>
    )
}

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySections
})

// const mapStateToProps = (state)=>{
//   return({
//     sections:state.directory.sections
//   })
// }
const mapDispatchToProps = null

export default connect(mapStateToProps ,mapDispatchToProps)(Directory);
