import './index.css'

const DenominationItem = props => {
  const {itemDetails, onBtnElement} = props
  const {value} = itemDetails
  const onChangeBtn = () => {
    onBtnElement(value)
  }
  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onChangeBtn}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
