import Link from "next/link"

export const Breadcumb = (props) => {
  return (
    <>
     <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
            <div className="container">
                <div className="banner_content text-center">
                    <h2>{props.name}</h2>
                    <div className="page_link">
                        <Link href="/">Home</Link>
                        <Link href={props.url}>{props.urlName}</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
