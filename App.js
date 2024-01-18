//Nested in react;



    const parent = React.createElement("div", {id: "parent"},[
React.createElement("div",{id:"child"}, [
React.createElement("h1",{}, "iam a h1 tag"), React.createElement("h2", {}, "iam h2 tag")
]),
React.createElement("div",{id:"child"}, [
    React.createElement("h1",{}, "iam a h1 tag"), React.createElement("h2", {}, "iam h2 tag")
    ])]
)
        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(parent);