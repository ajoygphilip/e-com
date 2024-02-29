function ProductDescription({ lorem, description }) {
  return (
    <div className="text-sm max-w-[600px] text-pretty">
      <p>{description}</p>
      <br />
      <p>{lorem.generateParagraphs(1)}</p>
      <br />
      <p>{lorem.generateParagraphs(1)}</p>
      <br />
    </div>
  )
}

function AddToCartButton(props) {
  return (
    <form
      className="flex  border border-slate-200 inline"
      action="/"
      method="get"
    >
      <input
        className="bg-white p-1 md:p-2 "
        type="number"
        step="1"
        max={props.stock}
        id="header-search"
        placeholder={`${props.stock} remaining`}
        name="s"
      />
      <button
        className="bg-[#16BA9A] text-white p-2 flex justify-center item-center"
        type="button"
      >
        <div className="flex items-center justify-center">
          <img className=" max-h-10 m-0" src="assets/cart.png" />
          <div className="flex flex-col">
            <p className=" text-[12px]">Add to Cart</p>
          </div>
        </div>
      </button>
    </form>
  )
}

export function ProductDetailInfo({ lorem, product }) {
  return (
    <div className="flex flex-col items items-center px-4">
      <div className="self-start pb-2">
        <h2 className="font-bold inline">{product.title}</h2>{' '}
        <span className="pl-2">{product.rating}/5</span>
      </div>

      <ProductDescription lorem={lorem} description={product.description} />

      <p className="self-start text-[12px]">
        As low as{' '}
        <span className="text-[#d33539] text-[18px] font-semibold">
          ${product.price}
        </span>
      </p>

      <AddToCartButton stock={product.stock}></AddToCartButton>
    </div>
  )
}
