import notfound from '../../assets/images/error-404.png'
import './notfound.scss'

const NotFound = () => {
    return (
        <section id="not-found">
            <h2> Ops, não encontramos essa página. </h2>
            <img src={notfound} alt="not found" />
        </section>
    )
}

export default NotFound