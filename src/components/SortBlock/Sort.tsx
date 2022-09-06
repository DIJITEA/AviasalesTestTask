import '../../assets/scss/SortBlockScss/sortBlock.scss'

let prev:HTMLElement
function ActiveSort(e:HTMLElement){
    if (prev) prev.classList.toggle('sort-block__button--active')
    e.classList.toggle('sort-block__button--active')
    prev = e
}
function Sort(){
    return(<div className='sort-block'>
        <button className='sort-block__button' onClick={(e)=>{ActiveSort(e.target as HTMLElement)}}>САМЫЙ ДЕШЕВЫЙ</button>
        <button className='sort-block__button' onClick={(e)=>{ActiveSort(e.target as HTMLElement)}}>САМЫЙ БЫСТРЫЙ</button>
        <button className='sort-block__button' onClick={(e)=>{ActiveSort(e.target as HTMLElement)}}>ОПТИМАЛЬНЫЙ</button>
    </div>)
}
export default Sort