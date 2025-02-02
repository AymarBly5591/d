import React  , {  useState}  from 'react'
import  AddProduct  from  "../Modal/Products/AddProduct";
import  EditProduct  from  "../Modal/Products/EditProduct";
import  DeleteProduct  from  "../Modal/Products/DeleteProduct";

const ListProducts = ({products}) => {
    const  [showAdd, setAdd] = useState(false) ;
    const  [showEdit, setEdit] = useState(false) ;
    const  [showDelete, setDelete] = useState(false) ;
    const  [choice , setChoice] = useState(false);
    
    // fucntion montrer modal Add product
    function ShowAdd(){
        setAdd(true);
    }
    function HideAdd(){
        setAdd(false);
    }
     // fucntion montrer modal edit product
    function ShowEdit(){
        setEdit(true);
    }
    function HideEdit(){
        setEdit(false);
    }

     // fucntion montrer modal Add product
     function ShowDelete(){
        setDelete(true);
    }
    function HideDelete(){
        setDelete(false);
    }

    // Focntion chackbox electedt
    function SelectItem(){
        if(choice ==  true){
            setChoice(false)
        }else{
            setChoice(true)
        }
    }

  return (
    
    <main>
    <div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
       <div class="mb-1 w-full">
          <div class="mb-4">
             <nav class="flex mb-5" aria-label="Breadcrumb">
                <ol class="inline-flex items-center border-b space-x-1 md:space-x-2">
                   <li class="inline-flex items-center">
                      <a href="#" class="text-gray-700 hover:text-gray-900 inline-flex items-center">
                         <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                         Home
                       </a>
                   </li>
                    
                   <li>
                        <div class="flex items-center">
                            <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <span class="text-gray-400 ml-1 md:ml-2 text-sm font-medium" aria-current="page">Products</span>
                       </div>
                   </li>
               </ol>
           </nav>
           <h1 class="text-xl sm:text-2xl font-semibold text-gray-900 border-b">Tous les produits</h1>
           </div>
           <div class="block sm:flex items-center md:divide-x md:divide-gray-100">
                   <form class="sm:pr-3 mb-4 sm:mb-0 flex   " action="#" method="GET">
                       
                        
                        <div className="border flex items-center justify-center">
                            <label className="flex-row ">Catégorie</label>
                           <select type="text" name="category" id="category" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                                <option Value="" className="uppercase font-bold">....</option>
                                <option Value="" className="uppercase font-bold">Electromenager</option>
                                <option Value="" className="uppercase font-bold">Accessoires</option>
                                <option Value="" className="uppercase font-bold">Informatiques</option>
                            </select>
                       </div>
                       <div class="mt-1 relative sm:w-64 xl:w-96 flex">
                             <label for="products-search" class="sr-only">Search</label>
                            <input type="text" name="email" id="products-search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Search for products"/>
                            <button type="submit " className="bg-cyan-700 py-full px-2 rounded hover:bg-cyan-800 text-white ">rechercher</button>
                        </div>
                   </form>
                   <div class="flex items-center sm:justify-end w-full">
                       <div class="hidden md:flex pl-2 space-x-1">
                           <a href="#" class="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center">
                              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                           </a>
                           <a href="#" class="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center">
                               <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                           </a>
                           <a href="#" class="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center">
                              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                           </a>
                           <a href="#" class="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center">
                               <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                           </a>
                       </div>

                       


                       <button type="button" onClick={ShowAdd} data-modal-toggle="add-product-modal" class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2 text-center sm:ml-auto">
                           <svg class="-ml-1 mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                           Ajouter produit
                       </button>
                   </div>
               </div>
           </div>
       </div>


       <div class="flex flex-col">
           <div class="overflow-x-auto">
               <div class="align-middle inline-block w-full">
                   <div class="shadow overflow-hidden">
                       <table class="table-fixed min-w-full divide-y divide-gray-50">
                             <thead class="bg-gray-100">
                                  <tr className="bg-gray-800">

                                      <th scope="col" class="p-4">
                                         <div class="flex items-center">
                                             <input id="checkbox-all" onClick={SelectItem} onClick={SelectItem} aria-describedby="checkbox-1" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"/>
                                             <label for="checkbox-all" class="sr-only">checkbox</label>
                                          </div>
                                       </th>

                                       <th scope="col" class="p-4 max-w-10 text-left text-xs font-medium text-gray-100 uppercase">
                                           Nom du profuit
                                       </th>
                                       <th scope="col" class="p-4 text-left text-xs font-medium text-gray-100 uppercase">
                                          Catégorie
                                       </th>
                                       <th scope="col" class="p-4 max-w-10 text-left text-xs font-medium text-gray-100 uppercase">
                                           Description
                                       </th>
                                       <th scope="col" class="p-4 text-left text-xs font-medium text-gray-100 uppercase">
                                           Prix
                                       </th>
                                        <th scope="col" class="p-4 text-left text-xs font-medium text-gray-100 uppercase">
                                           Rates
                                       </th>
                                       <th scope="col" class="p-4">
                                       </th>
                                   </tr>
                               </thead>
                           <tbody class="bg-white divide-y divide-gray-200">
                               {
                                   products.map((product)=>
                                       <tr class="hover:bg-gray-100">
                                            <td class="p-4 w-4">
                                                 <div class="flex items-center">
                                                     <input id={product.id}  
                                                        aria-describedby="checkbox-1" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"/>
                                                 </div>
                                            </td>

                                            <td class="p-4 w-5 whitespace-nowrap text-sm font-normal text-gray-500">
                                                <div class="text-base font-semibold text-gray-900">{product.name}</div>
                                                <div class="text-sm font-normal text-gray-500">{product.details}</div>
                                            </td>
                                            <td class="p-4 w-10 whitespace-nowrap text-base font-medium text-gray-900">{product.category}</td>
                                            <td class="p-4 w-20 whitespace-nowrap text-base font-medium text-gray-900">{product.description}</td>
                                            <td class="p-4 w-10 whitespace-nowrap text-base font-medium text-gray-900">{product.price}</td>
                                            <td class="p-4 w-10 whitespace-nowrap text-base font-medium text-gray-900">{product.rates}</td>
                                            <td class="p-4 w-10 whitespace-nowrap space-x-2">
                                               
                                               <button type="button" onClick={ShowEdit}  data-modal-toggle="product-modal" class="text-white bg-cyan-900 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                                                  <svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                                    Modifier
                                                </button>
                                                
                                                <button type="button" onClick={ShowDelete} data-modal-toggle="delete-product-modal" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                                                    <svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                                       Supprimer
                                                </button>
                                            </td>
                                             {/* Modal de modification de produit  */}
                                            <EditProduct 
                                               showEdit={showEdit}
                                               HideEdit={HideEdit}

                                                // elemnent du formulaire 
                                               name={product.name}
                                               category = {product.category}
                                               price={product.price}
                                               description={product.description}
                                               id={product.id}
                                               image={product.imageSrc}
                                               />
                                            {/* Modal de Suppression de produit  */}
                                            <DeleteProduct
                                                showDelete={showDelete}
                                                HideDelete={HideDelete}
                                                // ajouter ici element formulaire
                                            />
                                        </tr>
                                   )                                   
                               }


                           </tbody>
                       </table>
                   </div>
               </div>
           </div>
       </div>
       <div class="bg-white sticky sm:flex items-center w-full sm:justify-between bottom-0 right-0 border-t border-gray-200 p-4">
           <div class="flex items-center mb-4 sm:mb-0">
                <a href="#" class="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center">
                   <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
               </a>
               <a href="#" class="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center mr-2">
                  <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
               </a>
               <span class="text-sm font-normal text-gray-500">Showing <span class="text-gray-900 font-semibold">1-20</span> of <span class="text-gray-900 font-semibold">2290</span></span>
           </div>
           <div class="flex items-center space-x-3">
               <a href="#" class="flex-1 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center">
                  <svg class="-ml-1 mr-1 h-5 w-5"  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    Previous
               </a>
               <a href="#" class="flex-1 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center">
                   Next
                  <svg class="-mr-1 ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
               </a>
           </div>
       </div>


       {/** Modal pour ajout de produit */}
       <AddProduct showAdd={showAdd}   HideAdd={HideAdd}/>
       {/* Modal pour modifier de produit */}
      
       

       


           

           <div class="hidden overflow-x-hidden overflow-y-auto fixed top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center h-modal sm:h-full" id="delete-product-modal" aria-hidden="true">
              <div class="relative w-full max-w-md px-4 h-full md:h-auto">
                  <div class="bg-white rounded-lg shadow relative">
                      <div class="flex justify-end p-2">
                          <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="delete-product-modal">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                           </button>
                       </div>
                       <div class="p-6 pt-0 text-center">
                           <svg class="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                           <h3 class="text-xl font-normal text-gray-500 mt-5 mb-6">Are you sure you want to delete this product?</h3>
                            <a href="#" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                               Yes, I'm sur
                           </a>
                           <a href="#" class="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center" data-modal-toggle="delete-product-modal">
                               No, cancel
                           </a>
                       </div>
                   </div>
               </div>
           </div>
       </main>
    
  )
}

export default ListProducts;