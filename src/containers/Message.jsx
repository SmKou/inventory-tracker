import PropTypes from 'prop-types'

function Message(props) {
    const context = props;
    return <section className="error-notification">
        {context.error !== null ?
            <>
                <p><strong>context.error</strong></p>
                <p>context.message</p>
            </>
            : context.aggregate && context.aggregate.length !== 0 ?
                <>{context.aggregate.map((errorObj) => <div>
                    <p><strong>{errorObj.error}</strong></p>
                    <p>{errorObj.message}</p>
                </div>)}</>
                : <></>
        }
    </section>
}

export default Message;