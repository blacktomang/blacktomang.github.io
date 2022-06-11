export const getColor = (color, opacity = null) => {
  const darkBlue = [17, 43, 60];
  const blue = [32, 83, 117];
  const orange = [246, 107, 14];
  const white = [239, 239, 239];

  let joinedArray = '';
  switch (color) {
    case 'darkBlue':
      joinedArray = darkBlue.join(', ');
      break;
  
    case 'blue':
      joinedArray = blue.join(', ');
      break;

    case 'orange':
      joinedArray = orange.join(', ');
      break;
    
    default:
      joinedArray = white.join(', ');
      break;
  }
  if (opacity) return `rgb(${joinedArray}, ${opacity})`;
  else return `rgb(${joinedArray})`;
}