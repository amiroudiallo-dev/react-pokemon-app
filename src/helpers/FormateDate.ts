
const formatDate = (date: Date): string => {
    // var finalMonth: string = '';
    // if (date.getMonth() < 10) {
    //     let month: number;
    //     month = date.getMonth() + 1;
    //     finalMonth = '0' + month;
        
    // }
    // console.log(finalMonth);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export default formatDate;