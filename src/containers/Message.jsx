import PropTypes from 'prop-types'

const getMessageColor = (status) => status ? ({ background: 'rgba(0, 255, 0, 0.6)' }) : ({ background: 'rgba(255, 0, 0, 0.6)'})

function Message(props) {
    const ctx = props.context;
    return <>{Object.keys(ctx).length ?
        <section className="notification" style={getMessageColor(ctx.status)}>
            {ctx.error !== null || ctx.success !== null ?
                <>
                    <p><strong>{ctx.error || ctx.success}</strong></p>
                    <p>{ctx.message}</p>
                </>
                : ctx.aggregate && ctx.aggregate.length !== 0 ?
                    <>{ctx.aggregate.map((errorObj) => <div>
                        <p><strong>{errorObj.error}</strong></p>
                        <p>{errorObj.message}</p>
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