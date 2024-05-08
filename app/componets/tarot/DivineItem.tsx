// import React, {useImperativeHandle} from "react";
// import {Image} from "@nextui-org/react";
// import cardBack from "@/app/assets/image/card_back.jpg";
//
// let TarotManager = require('@/app/utils/TarotManager');
//
//
// // export const DivineItem = ({cardId = 0, isOpen = false, tarot}:{cardId: number, isOpen: boolean, tarot: TarotEntity}) => {
// //     if (cardId == 0) {
// //         return <div></div>
// //     }
// //
// //     console.log(tarot)
// //
// //     const isRev = cardId < 0
// //
// //     // let card = TarotManager.getTarotData(cardId)
// //
// //     // card = isRev ? TarotManager.getTarotData(-1 * cardId) : card
// //
// //     const _revClass = isRev ? "rotate-180" : ""
// //
// //
// //     return (
// //         <div className="text-white">
// //             {
// //                 <div>
// //                     <Image
// //                         removeWrapper
// //                         alt="Card background"
// //                         className={isOpen ? `${_revClass} bg-cover` : "bg-cover"}
// //                         src={isOpen ? tarot.image : cardBack.src}
// //                     />
// //                     <p className=" text-center max">
// //                         <small>
// //                             {
// //                                 isOpen ? `${tarot.name}` : ""
// //                             }
// //                         </small>
// //                     </p>
// //
// //                 </div>
// //             }
// //
// //         </div>
// //     )
// // }
