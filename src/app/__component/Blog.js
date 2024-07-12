import Link from "next/link";

export const Blog = () => {
  return (
    <>
      <section className="blog_area">
        <div className="container mx-auto mt-4">
          <div className="row  mx-auto">
            <div className="col-lg-1"></div>
            <div className="col-lg-10  mx-auto">
                <article className="row blog_item  mx-auto">
                  <div className="col-md-10  mx-auto">
                    <div className="blog_post">
                      <img src="img/blog/main-blog/m-blog-1.jpg" alt="" />
                      <div className="blog_details">
                        <Link href="#">
                          <h2>Astronomy Binoculars A Great Alternative</h2>
                        </Link>
                        <p>
                          MCSE boot camps have its supporters and its
                          detractors. Some people do not understand why you
                          should have to spend money on boot camp when you can
                          get the MCSE study materials yourself at a fraction.
                        </p>
                        <Link href="#" className="primary_btn">
                          <span>View More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </section>
    </>
  );
};
