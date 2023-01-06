import React from 'react'

export default function Alert(props) {
    return (
        <div style={{ height: '30px' }}>
            {props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
                {props.alert}
                <button type="button" onClick={props.onCloseAlertClicked} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
        </div>
    )
}
