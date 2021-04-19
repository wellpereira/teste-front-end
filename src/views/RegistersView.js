import { View } from "./View";

export class RegistersView extends View {
  constructor(element) {
    super(element);
  }

  template(model) {
    return `
        <table>
        
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>CPF</th>
                    <th>TELEFONE</th>
                    <th>EMAIL</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.registers
                  .map(
                    (n) => `
                    
                    <tr>
                        <td>${n.name}</td>
                        <td>${n.cpf}</td>
                        <td>${n.phone}</td>
                        <td>${n.email}</td>
                    </tr>
                    
                `
                  )
                  .join("")}                
            </tbody>
                  
            
        </table>
        `;
  }
}
