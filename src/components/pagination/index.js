import React, {useState} from "react";
import "./style.css";
import {cn as bem} from "@bem-react/classname";
import useStore from "../../store/use-store";

function Pagination({ totalItems, limit, paginate}) {
    const cn = bem('Pagination');
    const pageNumbers = [];
   
    for(let i = 1; i <= Math.ceil(totalItems / limit); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={cn()}>
                {
                    pageNumbers.map((number) => (
                            <div className={cn("item")} key={number}>
                                <div className={cn("link")} onClick={() => paginate(number)}>
                                    {number}
                                </div>
                            </div>
                        ))
                }
        </div>
    )
}

export default Pagination;