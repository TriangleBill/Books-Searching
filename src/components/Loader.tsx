

export default function Loader(): JSX.Element {
    return (
        <div className='d-flex justify-content-center'>
            <div data-testid="loader" className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
}
