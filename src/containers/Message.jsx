import PropTypes from 'prop-types'
import Styles from '../assets/Styles'


const addMessageColor = (status) => ({
    ...Styles.notification.section,
    background: status ? 'rgba(0, 255, 0, 0.6)' : 'rgba(255, 0, 0, 0.6)'
})

function Message(props) {
    const ctx = props.context;
    return <>{Object.keys(ctx).length ?
        <section style={addMessageColor(ctx.status)}>
            {ctx.error !== null || ctx.success !== null ?
                <>
                    <p style={Styles.notification.pStrong}>{ctx.error || ctx.success}</p>
                    <p style={Styles.notification.p}>{ctx.message}</p>
                </>
                : ctx.aggregate && ctx.aggregate.length !== 0 ?
                    <>{ctx.aggregate.map((errorObj) => <div>
                        <p style={Styles.notification.pStrong}>{errorObj.error}</p>
                        <p style={Styles.notification.p}>{errorObj.message}</p>
                    </div>)}</>
                    : <></>
            }
        </section>
        : <></>
    }</>
}

Message.propTypes = {
    context: PropTypes.object
}

export default Message;