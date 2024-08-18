// import { useGlobalContext } from '@/context/ContextApi';
// import React from 'react';

// export const ToogleTheme = () => {
//   const {
//     darkModeObject: { darkMode, setDarkMode },
//   } = useGlobalContext();

//   const handleClickedDarkMode = (index: number) => {
//     const updateDarkModeObject = darkMode.map((item, i) => {
//       if (i === index) {
//         return { ...item, isSelected: true };
//       } else {
//         return { ...item, isSelected: false };
//       }
//     });
//     setDarkMode(updateDarkModeObject);
//   };

//   return (
//     <div className="bg-slate-100 h-9 w-20 rounded-3xl flex items-center gap-2 pl-1">
//       {darkMode.map((item, index) => {
//         const { id, icon: Icon, isSelected } = item;
//         return (
//           <div
//             key={id}
//             className={`${
//               isSelected
//                 ? 'bg-cyan-600 text-white'
//                 : 'bg-slate-100 text-cyan-600'
//             }
//               w-7 h-7 flex item-center justify-center rounded-full top-[4px] p-1 left-1 cursor-pointer select-none
//             `}
//             onClick={() => handleClickedDarkMode(index)}
//           >
//             <Icon />
//           </div>
//         );
//       })}
//     </div>
//   );
// };
