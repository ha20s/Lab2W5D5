import React from 'react'

function Header() {
  return (
    <div className="w-full  bg-no-repeat" style={{ backgroundImage: `url('https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F55d7c998-fd67-4237-a21a-c7f9699e229a%2FScreen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png?table=block&id=fff185a2-dff1-81af-bc73-de1e521c36bc&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=1420&userId=&cache=v2')`, backgroundSize: 'cover' }}>

      <div className='p-20  max-sm:p-16 text-slate-300'>
        <p className='text-2xl py-3'>FreshGoods</p>
        <p className='text-6xl max-sm:text-4xl '>Concisly <br /> describe your <br /> product or service</p>
        <p className='py-4 pr-36 max-sm:pr-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facilis accusamus sequi tempore quis similique neque minima corrupti beatae suscipit voluptatem ut odit magni consectetur excepturi, nisi eaque laudantium quo.</p>
        <button className='bg-amber-500 font-bold p-2 rounded text-black'>Order Now</button>
      </div>


    </div> 
  )
}

export default Header




{/* <div class="bg-repeat ..." style="background-image: url(...)"></div> */}



{/* <div
  className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
  style="background-image: url('https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F55d7c998-fd67-4237-a21a-c7f9699e229a%2FScreen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png?table=block&id=fff185a2-dff1-81af-bc73-de1e521c36bc&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=1420&userId=&cache=v2'); height: 400px">
  <div
    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
    style="background-color: rgba(0, 0, 0, 0.6)">
    <div className="flex h-full items-center justify-center">
      <div className="text-white">
        <h2 className="mb-4 text-4xl font-semibold">Heading</h2>
        <h4 className="mb-6 text-xl font-semibold">Subheading</h4>
        <button
          type="button"
          className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          data-twe-ripple-init
          data-twe-ripple-color="light">
          Call to action
        </button>
      </div>
    </div>
  </div>
</div> */}