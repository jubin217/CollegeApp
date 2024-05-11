import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card mb-3" >
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src="https://sbce.ac.in/wp-content/themes/sbce/images/buddha.jpg" class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">Welcome To Sree Buddha College Of Engineering</h5>
                                                <br />
                                                <p class="card-text">Sree Buddha College of Engineering, affiliated to Kerala Technological University, has been par excellence in technical education. The sermons of Lord Buddha gave us a lead to be the flowers of exaltation. The primary objective is to promote education and research in the field of technology and to replenish the skills that get lurked in the budding technocrats. Each and every member in the family of SBCE pushes themselves to set the institution as an example to the world.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card">
                                    <div class="card-body p-0">
                                        <div id="carouselExample" class="carousel slide">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <img src="https://images.static-collegedunia.com/public/college_data/images/campusimage/142052746210.jpg" class="d-block w-100 img-fluid" alt="..." />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="https://sbce.ac.in/wp-content/uploads/2017/05/gate2-e1582310432977.jpg" class="d-block w-100 img-fluid" alt="..." />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="https://images.static-collegedunia.com/public/college_data/images/campusimage/142052746216.jpg" class="d-block w-100 img-fluid" alt="..." />
                                                </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <br />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                                <div class="card text-bg-dark">
                                    <img src="https://www.dbgidoon.ac.in/wp-content/uploads/2018/07/CS-LAB-3.jpg" class="card-img" alt="" />
                                    <div class="card-img-overlay bg-dark" style={{ opacity: '0.7', transition: 'transform 0.5s ease' }}>
                                        <h3 class="card-title"><b>Our Vision</b></h3>
                                        <br />
                                        <br />
                                        <h5 class="card-text">To create proffesionally competent engineers with human values and social commitements</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                                <div class="card text-bg-dark">
                                    <img src="https://www.edwiseinternational.com/images/Blog-On-Studying-Abroad-Overseas-Education-Aug-2015.jpg" class="card-img" alt="" />
                                    <div class="card-img-overlay bg-dark" style={{ opacity: '0.7' }}>
                                        <h3 class="card-title"><b>Our Programmes</b></h3>
                                        <br />
                                        <br />
                                        <button className="btn btn-success"><b>Under Graduate</b></button>
                                        <br />
                                        <br />
                                        <button className="btn btn-success"><b>Post Graduate</b></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                                <div class="card text-bg-dark">
                                    <img src="https://www.dbgidoon.ac.in/wp-content/uploads/2018/07/CS-LAB-3.jpg" class="card-img" alt="" />
                                    <div class="card-img-overlay bg-dark" style={{ opacity: '0.7' }}>
                                        <h3 class="card-title"><b>Our Mission</b></h3>
                                        <br />
                                        <br />
                                        <h5 class="card-text">Offer well balanced curriculum with student-centric approach.</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="accordion" id="accordionPanelsStayOpenExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ color: 'black' }}>
                                                <b>Placements</b>
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                            <div class="accordion-body">
                                                Career Guidance and Placement Unit (CGPU) has played a vital role in ensuring the career development and campus recruitment of the students graduating from SBCE. With a close watch on the changing employment scenario, the Unit has always guided students in their career options and facilitated recruitment drives of prestigious companies.
                                                CGPU operates on a three-tier system, the upper most being the Advisory Council, comprising of a member of the SBC Trust, Principal, and Head of CGPU. The second tier which is the Core team consists of the Head of CGPU, Heads of All departments, Placement Officers and Placement Manager. The third tier comprises of Sr.Advisors and student representatives of final year from all branches.
                                                CGPU is well equipped to conduct training and placement drives in the campus. The facilities include four air-conditioned halls of a total seating capacity of around 1400, four computing facilities with cumulative capacity of around 300 computers and fifteen cabins to conduct interviews and group discussions.
                                                The major employers are invited to conduct seminars and workshops on Career Development every year. Students are also enlightened about the changing market and employability demands through orientation sessions. CGPU provides compulsory training in Personality Development, CV Writing, Communication Skills, Aptitude tests, Interview Technique etc. to all students. The training programmes are framed based on the Training Need Analysis (TNA) conducted in advance. These programmes are carried out with the support of competent external as well as in house experts. Workshop for students, Faculty Development Programmes and Internship for students in industries help the institution to keep abreast of technological advancements and strengthen its ties with industries.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo" style={{ color: 'black' }}>
                                                <b>Anti-drugs Cell</b>
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                            <div class="accordion-body">
                                                Anti Drugs Cell of the college has been constituted to ensure a drug- free campus by imposing a total ban on the possession or consumption or use of drugs and alcohol by students of the college, within or outside the campus/hostels.

                                                The duties of the anti-drugs cell include : <br />
                                                -Organizing awareness programmes in the college and hostels with the help of government authorized agencies/ organizations. <br />
                                                -Educating the students about the ill-effects of drugs and alcohol. <br />
                                                -Encouraging peer policing among students against the use of drugs. <br />
                                                -Reporting of any noticed use of drugs by the students to the students affairs committee.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree" style={{ color: 'black' }}>
                                                <b>Arts Club</b>
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                                            <div class="accordion-body">
                                                Art without Engineering is just dreaming. Engineering without Art is just calculating.

                                                The proud league of SBC alumni boasts socially committed engineers rather than money making cooperate slaves. This cultural enlightenment is the outcome of socio-cultural exposure which each and every SBCIAN acquires, and this exposure is the result of a well functioning Arts club.

                                                Arts club is a common platform for all to speak up and debate how SBC should be. Every college is a market place for all talents. But how they are identified and incubated is all that matters. This defines the success of a college and their students. If academics can accelerate a research scholar, here we accelerate a coder who designs his User Interface (UI) because only an artist can identify the pulse of the customer.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
