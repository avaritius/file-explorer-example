import Details from "./Details"
import Directory from "./Directory"

function FileExplorer({ fileSystem }) {
    return (
        <>
            <Details name={fileSystem.name} type={fileSystem.type} />
            {fileSystem.children.map(
                (child) => <Directory name={child.name} type={child.type} children={child.children} />
            )}

        </>
    )
}

export default FileExplorer