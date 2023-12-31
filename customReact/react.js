function customRender (customElements, container){
    // const domElement = document.createElement(customElements.type)
    // domElement.innerHTML = customElements.children
    // domElement.setAttribute("href", customElements.props.href)
    // domElement.setAttribute("target", customElements.props.target)

    // container.appendChild(domElement)

    const domEvent = document.createElement(customElements.type)

    domEvent.innerHTML = customElements.children
    for (const prop in customElements.props) {
        domEvent.setAttribute(prop, customElements.props[prop])
    }

    container.appendChild(domEvent)

}
const customElements = {
    type  :"a",
    props:{

        href : "https://www.google.com/",
        target: "_blank"
    },
    children : "click me to visit google"
}




const root = document.getElementById("root")

customRender(customElements, root)