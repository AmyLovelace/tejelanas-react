import Swal from 'sweetalert2';

export const alertSwal = async(icon, title, text, timer,confirmButtonText = 'OK',background='#1e283a',color='#fff',confirmButtonColor= null) => {
   
    Swal.fire({
        position: 'center',
        icon: icon,
        title: title,
        html: icon === 'error' 
        ? `<div style="text-align: center;">${text}</div>` 
        : text,
        showConfirmButton: true,
        timer: timer,
        background: background,
        color: color,
        confirmButtonText:confirmButtonText,
        confirmButtonColor: confirmButtonColor
        // animation: false
    })
};

export const alertConf = async (question, confirmText = 'Sí, enviar', cancelText = 'No enviar') => {
    const result = await Swal.fire({
      title: question,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
      background: '#1e283a',
      color: '#fff',
      //toast:true
    });
  
    return result.isConfirmed;
  };