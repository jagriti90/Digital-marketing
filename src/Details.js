import React from 'react'

const Details = () => {
  return (
    <>
       <div class="clearfix">


                                    <div class="psg_dls">
                                        <ul class="w-100-fl">
                                            <li>
                                                <div class="pass_bx">
                                                    <label>Adults <small>(+12 yrs)</small></label>
                                                    <div class="input-group number-spinner">
                                                        <span class="input-group-btn">
                                                            <a class="btn mns_btn" data-dir="dwn" onclick="decrease_adult_rt()"><i class="fa fa-minus"></i></a>
                                                        </span>
                                                        <input type="text" id="Adult" class="text-center add_num" name="Adult" value="1" />
                                                        <span class="input-group-btn">
                                                            <a class="btn add_btn" data-dir="up" onclick="increase_adult_rt()"><i class="fa fa-plus"></i></a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="pass_bx">
                                                    <label>Child <small>(0-11 yrs)</small></label>
                                                    <div class="input-group number-spinner">
                                                        <span class="input-group-btn">
                                                            <a class="btn mns_btn" data-dir="dwn" onclick="decrease_child_rt()"><i class="fa fa-minus"></i></a>
                                                        </span>
                                                        <input type="text" id="Child" class="text-center add_num" name="Child" value="0" />
                                                        <span class="input-group-btn">
                                                            <a class="btn add_btn" data-dir="up" onclick="increase_child_rt()"><i class="fa fa-plus"></i></a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="pass_bx">
                                                    <label> Infant <small>(Upto 2 yrs)</small></label>
                                                    <div class="input-group number-spinner">
                                                        <span class="input-group-btn">
                                                            <a class="btn mns_btn" data-dir="dwn" onclick="decrease_infant_rt()"><i class="fa fa-minus"></i></a>
                                                        </span>
                                                        <input type="text" class="text-center add_num" id="Infant" name="Infant" value="0" />
                                                        <span class="input-group-btn">
                                                            <a class="btn add_btn" data-dir="up" onclick="increase_infant_rt()"><i class="fa fa-plus"></i></a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        </div>
                                        </div>
                                                
    </>
  )
}

export default Details