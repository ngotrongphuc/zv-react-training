export default function Info(props) {
    const info = props.info;
    return (
        info ?
            <div>
                <p>Fullname: {info?.fullName}</p>
                <p>Email: {info?.email}</p>
                <p>Password: {info?.password}</p>
                <p>Id: {info?.id}</p>
                <p>Role: {info?.role}</p>
            </div>
            : <p>Please choose user to user detail</p>
    )
}