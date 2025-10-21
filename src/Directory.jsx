import Details from "./Details"

function Directory({ name, type, children }) {
    if (type === "folder") {
        return (
            <>
                <Details name={name} type={type} />
                {children.map(
                    (child) => <Directory name={child.name} type={child.type} children={child.children} />
                )}
            </>
        )
    }

    return (
        <Details name={name} type={type} />
    )
}

export default Directory