import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { toggleActive } from './active/actions'
import { getIsActive } from './active/select'
import Thingy from './ThingyEl'

const getProps = createStructuredSelector({ isActive: getIsActive })
const getActions = { toggleActive }
export default connect(getProps, getActions)(Thingy)
