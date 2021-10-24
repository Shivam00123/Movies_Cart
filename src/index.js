import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux'
import './index.css';
import App from './components/App';
import combineReducers from './reducers'



// const logger=function ({dispatch,getState}){
//   return function(next){
//     return function(action){
//       console.log('ACTION_TYPE=',action.type);
//       next(action)
//     }
//   }
// }
const logger=({dispatch,getState})=>(next)=>(action)=>{
  if(typeof action!== 'function'){
    console.log(action.type)
  }
  next(action)
}

const store=createStore(combineReducers,applyMiddleware(logger,thunk));
// console.log('store',store)


// console.log(store.getState(),"before")

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Amazing Spiderman 3'}]
// })
// console.log(store.getState(),"after")

// export const StoreContext= createContext()

// class Provider extends React.Component{
//   render(){
//     return(
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     )
//   }
// }

// export function connect(callback){
//   return function(Component){
//      class ConnectedComponent extends React.Component{
//       constructor(props){
//         super(props);
//          this.unsubscribe=this.props.store.subscribe(()=>this.forceUpdate())
//       };
//       componentWillUnmount(){
//         this.unsubscribe();
//       } 
//       render(){
//           const {store} =this.props;
//           const state=store.getState();
//           const dataToBePassedToProps=callback(state);
//           return(
//               <Component
//                 {...dataToBePassedToProps}
//                 dispatch={store.dispatch}
//               />
//         )
//       }
//     }
//     class ConnectedComponentWrapper extends React.Component{
//       render(){
//         return (
//           <StoreContext.Consumer>
//             {(store)=><ConnectedComponent store={store}/>}
//           </StoreContext.Consumer>
//         )}
//     }
//     return ConnectedComponentWrapper;
//   }
// }


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

