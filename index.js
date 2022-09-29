marked.setOptions({
    breaks:true
})
const renderer= new marked.Renderer();
function App(){
    const [text,setText]=React.useState('');
    return(
        <div className='text-center px-4'>
            <h1 className='p-4'>My Markdown previewer</h1>
            <textarea
            name='text'
            id='text'
            rows='20'
            value={text}
            onChange={(e)=>setText(e.target.value)}
            />
            <h3 className='mt-3'>Output</h3>
            <Preview markdown={text}/>
        </div>
    )
}

function Preview(markdown){
    return(
        <div
        dangerouslySetInnerHTML={{
            __hmtl:marked(markdown,{renderer:renderer})
        }}
        id='preview'
        >
            
        </div>
    )
}

const rootElement=document.getElementById('root');
const root=ReactDOM.createRoot(rootElement);
root.render(
    <App/>
);