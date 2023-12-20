import React, { useEffect } from 'react'

const PageProgress = () => {
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e: any) => {
        var progressWrap = document.querySelector('.progress-wrap');
        console.log("123", progressWrap)
        if (progressWrap != null) {
            var progressPath = document.querySelector('.progress-wrap path') as any;;
            if (progressPath) {
                var pathLength = progressPath.getTotalLength();
                var offset = 50;
                progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
                progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
                progressPath.style.strokeDashoffset = pathLength;
                progressPath.getBoundingClientRect();
                progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
                window.addEventListener("scroll", function (event) {
                    var scroll = document.body.scrollTop || document.documentElement.scrollTop;
                    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    var progress = pathLength - (scroll * pathLength / height);
                    progressPath.style.strokeDashoffset = progress;
                    var scrollElementPos = document.body.scrollTop || document.documentElement.scrollTop;
                    if (progressWrap) {
                        if (scrollElementPos >= offset) {
                            progressWrap.classList.add("active-progress")
                        } else {
                            progressWrap.classList.remove("active-progress")
                        }
                    }
                });
                progressWrap.addEventListener('click', function (e) {
                    e.preventDefault();
                    window.scroll({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    });
                });
            }
        }
    };
    return (<>
        <div className="progress-wrap">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
        </div></>);
}

export default PageProgress;