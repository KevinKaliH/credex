import HeaderContainer from "@/shared/components/HeaderContainer"
import { CARDS_LINKS, ILink } from "@bill/utils/const"

const PaymentBill = () => {

    const renderItem = (item: ILink, index: number) => <CardLinkTemplate key={index.toString()} value={item} />

    return (
        <div className="full-height d-flex flex-column">
            <HeaderContainer step={2}></HeaderContainer>

            <div className='flex-1'>
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>

                <div className='d-flex flex-wrap gap-3 justify-content-center w-100 '>
                    {CARDS_LINKS.map(renderItem)}
                </div>
            </div>
        </div>
    )
}

export default PaymentBill

const CardLinkTemplate = ({ value }: { value: ILink }) => {
    return <div className="d-grid shadow-sm rounded-xs bg-white px-3 py-2" style={{ width: '250px' }}>
        <div className="rounded-circle p-4" style={{ width: '50px', height: '50px', backgroundColor: value.fill, boxSizing: 'content-box', justifySelf: 'center' }}>
            <img src={value.icon} className="w-100 h-100" />
        </div>
        <a href={value.link} className="my-3 btn btn-primary d-block border-0 rounded-pill p-1 text-uppercase fw-semibold" role="button">Realizar</a>
        <p className="text-center text-uppercase fw-semibold fs-6 mb-0">{value.label}</p>
    </div>
}
