function customRender(reactElement, container){
    const domElement = document.createElement
    (reactelement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
domElement.setATTRIBUTE('target', reactElement.props.target)
container.appendchild(domElement)


}


const reactElement = {
    type: 'a',
    props:{
        href: '',
        target: '',
    },
children: 'Click me to visit google'
}



const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)