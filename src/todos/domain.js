import dataFlows from './dataFlows'
import Todos from './components'
const Domain = ($ES.CONTEXT == 'NODE' ? require('bufflehead/node') : require('bufflehead/browser')).Domain

export default new Domain({
    name: 'todos',
    container: Todos,
    dataFlows: dataFlows
})
