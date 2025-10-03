# Configuração do Google Maps - Guia Completo

## 🚨 Problema: "refused to connect"

O erro "refused to connect" no Google Maps geralmente ocorre por uma das seguintes razões:

### 1. **Chave de API Ausente ou Inválida**
- A chave de API não foi configurada
- A chave está incorreta ou expirada
- A chave não tem as permissões necessárias

### 2. **Restrições de Domínio**
- A chave de API está restrita a domínios específicos
- O domínio atual não está autorizado
- Configuração de CORS inadequada

### 3. **Cotas e Limites**
- Limite de requisições excedido
- Billing não configurado no Google Cloud
- API desabilitada

## 🔧 Soluções Passo a Passo

### **Passo 1: Criar/Verificar Chave de API**

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. Vá para **APIs & Services > Credentials**
4. Clique em **Create Credentials > API Key**
5. Copie a chave gerada

### **Passo 2: Habilitar APIs Necessárias**

No Google Cloud Console, vá para **APIs & Services > Library** e habilite:

- ✅ **Maps Embed API** (essencial)
- ✅ **Maps JavaScript API** (recomendado)
- ✅ **Places API** (opcional)
- ✅ **Geocoding API** (opcional)

### **Passo 3: Configurar Restrições**

1. Vá para **APIs & Services > Credentials**
2. Clique na sua API Key
3. Em **Application restrictions**, escolha:
   - **HTTP referrers (web sites)**
   - Adicione seus domínios:
     ```
     localhost:*
     *.localhost:*
     yourdomain.com/*
     *.yourdomain.com/*
     ```

### **Passo 4: Configurar Billing**

1. Vá para **Billing** no Google Cloud Console
2. Associe um método de pagamento ao projeto
3. O Google oferece $200 de crédito gratuito mensalmente

### **Passo 5: Configurar no Projeto**

1. Crie um arquivo `.env` na raiz do projeto:
```env
VITE_GOOGLE_MAPS_API_KEY=sua_chave_aqui
```

2. Reinicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 🛠️ Implementação com Fallback

Nossa implementação inclui:

### **Componente GoogleMap**
- ✅ Detecção automática de erros
- ✅ Fallback para links externos
- ✅ Loading state
- ✅ Coordenadas GPS como backup
- ✅ Links para Google Maps e Waze

### **Funcionalidades de Fallback**
- Se o mapa não carregar, mostra:
  - Endereço completo
  - Coordenadas GPS
  - Botões para Google Maps e Waze
  - Interface amigável

## 🔍 Debugging

### **Verificar no Console do Navegador**

1. Abra as **Developer Tools** (F12)
2. Vá para a aba **Console**
3. Procure por erros relacionados ao Google Maps:

```javascript
// Erros comuns:
"Google Maps API error: InvalidKeyMapError"
"Google Maps API error: RefererNotAllowedMapError" 
"Google Maps API error: RequestDeniedMapError"
```

### **Verificar Network Tab**

1. Vá para a aba **Network**
2. Recarregue a página
3. Procure por requisições para `maps.googleapis.com`
4. Verifique o status da resposta

### **Testar API Key**

Teste sua chave de API diretamente no navegador:
```
https://maps.googleapis.com/maps/api/js?key=SUA_CHAVE_AQUI
```

## 🚀 Alternativas sem API Key

Se você não quiser usar uma API key, nossa implementação oferece:

1. **Links diretos para Google Maps**
2. **Integração com Waze**
3. **Coordenadas GPS para outros apps**
4. **Endereço completo para busca manual**

## 📱 Teste em Diferentes Ambientes

- ✅ **Desenvolvimento local** (localhost)
- ✅ **Preview build** (vite preview)
- ✅ **Produção** (domínio final)
- ✅ **Mobile** (responsividade)

## 🔒 Segurança

- ✅ Chave de API restrita por domínio
- ✅ Variáveis de ambiente para chaves
- ✅ Não exposição de chaves no código
- ✅ Fallback seguro sem API

## 📞 Suporte

Se ainda tiver problemas:

1. Verifique se o billing está ativo
2. Aguarde até 5 minutos após criar a chave
3. Teste em modo incógnito
4. Limpe o cache do navegador
5. Verifique as cotas no Google Cloud Console

---

**Nota:** O componente funciona mesmo sem API key, oferecendo uma experiência alternativa com links externos e coordenadas GPS.