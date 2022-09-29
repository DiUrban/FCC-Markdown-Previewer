
marked.setOptions({
    breaks:true,
})
const renderer= new marked.Renderer();
const initialState=
`# h1

## h2

[link](google.com)

\`<div></div>\`

\`\`\`
    let x=1
\`\`\`

- item1

>Block Quote

![React](https://idsb.tmgrup.com.tr/ly/uploads/images/2021/06/09/120588.jpg)

**Bold**

`
function App(){
    const [text,setText]=React.useState(initialState);
    return(
            <div className='text-center px-4'>
            <h1 className='p-4'>My Markdown previewer</h1>
            <textarea
            name='text'
            id="editor"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            className='textarea'
            rows='10'
            style={{resize:'none'}}
            ></textarea>
            <h3 className='mt-3 mb-3'>Output</h3>
            <Preview markdown={text}/>
            </div>
    )
}

function Preview({markdown}){
    return(
        <div
        dangerouslySetInnerHTML={{
            __html:marked(markdown,{renderer:renderer})
        }}
        id='preview'>  
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))