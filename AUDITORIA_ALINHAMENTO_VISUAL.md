# Auditoria de alinhamento visual — Carla Fiocchetti

**Escopo:** auditoria de leitura da landing em Next.js. Nenhum componente, texto, asset ou token visual foi alterado.

**Arquivos analisados:** `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx` e todos os componentes em `src/components/`.

**Limite da auditoria:** a análise de acessibilidade foi estática. Foco, teclado, contraste de estilos compostos e comportamento responsivo devem ser confirmados em navegador numa etapa posterior com scan WCAG/axe.

## Fonte de referência e ressalva

Há duas referências de cor no workspace:

- O resumo do pedido informa `#E8E1D0`, `#313427`, `#454837`, `#FFFFFF`, `#F5F1E8`, `#D5CEBC` e `#696B5E`.
- O Brand Guide disponível no workspace define `#F7F3EA`, `#3E4432`, `#EFC9BC`, `#E4D8CA` e `#C9A86A`, além de raio de 8px, bordas de 1px e dourado usado somente como detalhe.

As duas paletas não são equivalentes. Antes de qualquer refinamento, a fonte oficial dos tokens deve ser confirmada. Esta auditoria compara a implementação com ambos os conjuntos e não presume que os tokens atuais sejam cores antigas ou incorretas.

## A. Resumo executivo

**Alinhamento geral: 7/10.**

A landing já traduz a proposta premium, humana e editorial: imagens reais, WhatsApp como CTA prioritário, superfícies claras, verde-oliva, dourado pontual, bordas finas e boa hierarquia.

### Principais acertos

- WhatsApp é a ação dominante no hero, nos benefícios, CTA final e botão flutuante.
- Fotos são reais, naturais e centradas na profissional e no atendimento.
- Cards usam superfície branca, bordas de 1px e sombras contidas.
- A navegação é enxuta e não disputa atenção com o hero.
- A maior parte dos componentes usa raio-base de 8px.
- Há respeito a `prefers-reduced-motion` tanto no CSS quanto nas seções animadas.

### Principais divergências

- Bethany Elingston, Cormorant Garamond e Raleway não são carregadas; títulos usam Georgia e o corpo usa Avenir Next/Segoe UI/fallbacks.
- O container atual é 1120px, abaixo dos 1180px solicitados.
- O espaçamento atual é 56px no mobile e 74px no desktop, abaixo dos 72px e 112px indicados.
- Frames de imagem e CTA final usam raios de 16–18px, acima do padrão de 8px do guia disponível.
- O dourado atual não tem contraste suficiente como texto pequeno ou indicador de foco em fundos claros.

## B. Inventário atual

| Item | Implementação atual |
| --- | --- |
| Canvas | `#F7F3EA` |
| Superfície | `#FFFFFF` |
| Texto e CTA primário | `#3E4432` |
| Rosé/muted | `#EFC9BC` |
| Borda | `#E4D8CA` |
| Dourado/acento | `#C9A86A` |
| Container | `1120px` |
| Fonte do corpo | `Avenir Next`, `Segoe UI`, system fallback |
| Fonte dos títulos | Georgia, Times New Roman, serif fallback |
| Corpo | 16px / line-height 1.58; 17px a partir de 1024px |
| H1 | `clamp(42px, 11vw, 74px)`, peso 600, line-height 1.08 |
| H2 | `clamp(32px, 7vw, 52px)`, peso 600, line-height 1.08 |
| H3 | 22px, peso 600, line-height 1.08 |
| Labels | 12px, bold, caixa alta, tracking 0.08em |
| Botões | 14px, bold, altura mínima 52px; CTA do header 44px |
| Radius padrão | 8px |
| Radius excepcional | 16px em frames; 18px no hero e CTA final |
| Bordas | 1px |
| Sombra de card | `0 14px 34px` com oliva a 8% |
| Sombra suave | `0 18px 48px` com oliva a 10% |
| Espaçamento vertical | 56px mobile e 74px desktop na maioria das seções |
| Padding lateral | 16px por lado em todos os breakpoints |
| Motion | entrada de 20px, 0.55s, ease-out, uma vez por seção |

Não há arquivos de fonte locais nem carregamento por `next/font`.

## C. Comparação por categoria

| Categoria | Atual | Brand Guide | Status | Impacto da diferença | Recomendação |
| --- | --- | --- | --- | --- | --- |
| Cores | `#F7F3EA`, `#3E4432`, `#EFC9BC`, `#E4D8CA`, `#C9A86A`, branco. | Paleta resumida do pedido difere da paleta do guia disponível. | Parcial | Trocar canvas para `#E8E1D0` aquece e escurece a página; `#313427` escurece CTA e títulos; `#D5CEBC` reduz a presença de bordas. | Confirmar qual paleta é canônica antes de substituir tokens. Referência: paleta oficial. |
| Tipografia | Georgia em H1/H2/H3; Avenir Next/Segoe no corpo, botões e labels. | Bethany Elingston nos títulos; Cormorant Garamond como alternativa; Raleway para corpo e elementos funcionais. | Divergente | Há variação entre sistemas e falta a assinatura tipográfica esperada. | Validar disponibilidade e licença antes de trocar fontes. Referência: tipografia oficial. |
| Hierarquia | H1 42–74px, H2 32–52px, H3 22px; títulos com tracking negativo; corpo confortável. | Hierarquia editorial com serif display e sans funcional. | Parcial | A escala é boa; a métrica mudará com a fonte oficial. | Preservar escala e recalibrar tracking/line-height somente após a fonte final. Referência: hierarquia tipográfica. |
| Layout | Container 1120px; largura textual por `65ch`; grids de 2 e 3 colunas; 16px laterais. | Container 1180px; content-width 720px; 32px desktop e 20px mobile. | Parcial | Menos respiro lateral; ampliar container pode alongar linhas e deslocar CTAs. | Testar por breakpoint, sem mudança global de uma vez. Referência: layout e espaçamento. |
| Espaçamento | 56px mobile / 74px desktop. | 72px mobile / 112px desktop. | Divergente | O ritmo atual é mais compacto e pode favorecer conversão; o guia é mais editorial. | Testar primeiro em seções de conteúdo desktop; preservar hero, prova social e CTA final. Referência: ritmo vertical oficial. |
| Cards | Branco, borda 1px, sombra suave, raio 8px; frames com 16–18px. | Superfícies calmas, bordas de 1px, sombra restrita, raio de 8px. | Parcial | Cards informativos estão coerentes; frames mais arredondados suavizam a página além do padrão. | Normalizar apenas frames, e somente se a regra de 8px for rígida. Referência: cards e radius oficial. |
| Botões e CTAs | CTA oliva/branco, 52px, hover com elevação de 2px; header com 44px. | WhatsApp prioritário e alvos mínimos de 44px. | Parcial | Prioridade e dimensão estão corretas; foco dourado em fundo claro é fraco. | Preservar hierarquia e rótulos; ajustar somente foco acessível. Referência: CTA de WhatsApp e acessibilidade. |
| Header | Relativo, transparente, logo horizontal, CTA desktop. Não é sticky. | Navegação mínima, sem disputa de atenção. | Alinhado | Sticky não é uma exigência do guia; comportamento atual mantém leveza. | Preservar. Referência: postura de navegação minimalista. |
| Hero | Duas colunas, foto de atendimento real, caption e microprova. | Editorial, humano, cuidado individualizado e CTA visível. | Alinhado | É o trecho mais consistente com a direção da marca. | Preservar imagem, proporção e CTA acima da dobra. Referência: direção editorial e imagens reais. |
| FAQ | Cinco cards abertos sem interação; respostas provisórias declaradas no código. | Sem obrigação de accordion no guia disponível; tom acolhedor e claro. | Parcial | Cards abertos ajudam a validação e escaneabilidade; placeholder prejudica confiança se publicado. | Não converter automaticamente em accordion; validar respostas com a Carla. Referência: clareza e tom de marca. |
| Footer | Fundo oliva, símbolo claro em PNG e nome recomposto em Georgia. | Logo invertida, contraste alto e símbolo moderado. | Parcial | Contraste e uso do símbolo estão bons; texto recomposto não substitui marca aprovada. | Quando houver asset aprovado, usar logo horizontal invertida. Referência: uso de logo e consistência tipográfica. |
| Imagens | Hero e retrato com naturalidade; foto de experiência mais clínica; provas sociais preservadas. | Fotos reais, luz natural, saturação baixa, contraste moderado, sem filtros pesados. | Alinhado | Autenticidade é forte; crop desktop da foto de experiência merece revisão visual futura. | Preservar assets; revisar apenas crop se necessário. Referência: diretrizes de imagem. |
| Motion | Entrada de 20px, 0.55s, `easeOut`. | Movimento discreto; tokens do guia disponível sugerem 0.1–0.3s. | Parcial | O movimento é suave, mas mais lento que os tokens. | Só reduzir duração depois de confirmar o guia final. Referência: motion tokens. |
| Acessibilidade | Semântica estrutural boa, `alt` presente, CTAs nomeados e reduced motion implementado. | Identidade não deve sacrificar legibilidade. | Parcial | Dourado em superfícies claras não atende contraste para texto pequeno/foco. | Reservar dourado para linhas, estrelas decorativas e detalhes não textuais. Referência: uso restrito de dourado e WCAG AA. |

## D. Cores e contraste

### Cores realmente utilizadas

- `#F7F3EA`: fundo geral da página.
- `#FFFFFF`: cards, imagens enquadradas e botão claro.
- `#3E4432`: texto principal, fundo dos CTAs, footer.
- `#EFC9BC`: token muted/acento secundário; não é dominante no layout.
- `#E4D8CA`: bordas e ornamentos de contorno.
- `#C9A86A`: linhas dos eyebrows, estrelas, detalhes e alguns textos pequenos.

### Relação com a paleta solicitada

| Cor solicitada | Equivalente atual | Leitura |
| --- | --- | --- |
| `#E8E1D0` | `#F7F3EA` | Próxima em intenção, mas atual é mais clara. |
| `#313427` | `#3E4432` | Próxima em intenção, mas solicitada é mais escura. |
| `#454837` | Não há uso direto. | Ausente. |
| `#FFFFFF` | `#FFFFFF` | Alinhada. |
| `#F5F1E8` | Não há uso direto. | Ausente. |
| `#D5CEBC` | `#E4D8CA` | Próxima em intenção, mas solicitada é mais escura. |
| `#696B5E` | Não há uso direto. | Ausente. |

### Contrastes verificados

- `#3E4432` sobre `#F7F3EA`: **9.13:1** — excelente.
- Branco sobre `#3E4432`: **10.11:1** — excelente.
- `#C9A86A` sobre `#F7F3EA`: **2.04:1** — insuficiente para texto pequeno e foco.
- `#313427` sobre `#E8E1D0`: **9.76:1** — excelente.
- `#454837` sobre `#F5F1E8`: **8.33:1** — excelente.
- `#696B5E` sobre `#F5F1E8`: **4.82:1** — atende texto normal AA.

## E. Acessibilidade

### Pontos positivos

- Estrutura de página com `header`, `main`, `footer`, seções rotuladas e hierarquia H1/H2/H3 consistente.
- Todas as imagens de conteúdo têm texto alternativo.
- Links de WhatsApp têm nome acessível e abertura segura em nova aba.
- Botões têm altura mínima de 44px ou mais.
- `prefers-reduced-motion` está contemplado em CSS e no Motion.

### Pontos a confirmar ou ajustar

- `focus-visible:outline-accent` usa dourado. Em botão claro/fundo claro, o contraste visual é insuficiente para indicador de foco.
- Textos dourados pequenos, como a label “Experiência e proximidade” e numerações dos cards, não têm contraste adequado sobre branco.
- A estrela com `aria-label="5 estrelas"` merece confirmação em leitor de tela durante teste runtime.
- Não há skip link. É melhoria possível, mas não deve preceder as prioridades visuais e de conteúdo desta etapa.
- Ainda é necessário validar navegação por Tab, reflow a 320px, zoom de 200% e scan axe em navegador.

## F. Prioridades

### Alta prioridade

1. Confirmar a paleta canônica entre o resumo do pedido e o Brand Guide do workspace. Referência: paleta oficial.
2. Regularizar fonte, disponibilidade e licença antes de qualquer troca de família tipográfica. Referência: Bethany Elingston/Cormorant/Raleway.
3. Tirar dourado de textos pequenos e de foco em fundo claro. Referência: acessibilidade e regra de dourado como detalhe.
4. Substituir respostas provisórias da FAQ somente após validação da Carla. Referência: tom profissional e acolhedor.

### Média prioridade

1. Testar o espaçamento vertical do guia em desktop, por seção.
2. Validar container de 1180px e padding de 32px/20px em breakpoints reais.
3. Disponibilizar versão horizontal invertida aprovada para o footer.
4. Confirmar se os tokens de motion de 0.1–0.3s são aplicáveis à landing.

### Baixa prioridade

1. Revisar frames de 16–18px versus radius de 8px.
2. Revisar crop desktop da imagem de experiência.
3. Recalibrar tracking dos títulos após a fonte final.

### Não alterar nesta etapa

- Ordem das seções.
- Textos, imagens e CTAs existentes.
- Estratégia de WhatsApp como ação dominante.
- Hero, foto principal e relação texto/imagem.
- FAQ em cards enquanto o conteúdo estiver em validação.
- Uso moderado do símbolo no footer.

## G. Plano incremental de refinamento, sem código

1. **Conciliação do guia:** definir a paleta e as fontes canônicas.
2. **Tipografia:** comparar a fonte aprovada com a escala atual sem alterar a estrutura ou o conteúdo.
3. **Acessibilidade visual:** revisar foco e usos textuais do dourado.
4. **Ritmo e largura:** testar espaçamentos e container por breakpoint, começando pelo desktop.
5. **Acabamento de marca:** avaliar footer invertido e raios de frames.
6. **Validação final:** executar teclado, zoom, mobile e axe/WCAG AA em navegador.

## H. Riscos de mudanças futuras

- Aumentar container ou espaçamentos pode deslocar CTAs para baixo da dobra e diminuir densidade de conversão.
- Trocar fontes sem arquivos licenciados pode alterar quebra de linhas e produzir aparência diferente por dispositivo.
- Uniformizar todos os raios para 8px pode tirar suavidade de áreas já visualmente aprovadas.
- Migrar a paleta inteira sem resolver a divergência documental pode descaracterizar a landing atual.
- Priorizar dourado estético sem contraste adequado prejudica foco e legibilidade.
- Converter FAQ para accordion antes da validação de conteúdo pode reduzir escaneabilidade e não é uma exigência comprovada do guia.

## Arquivos de referência da implementação

- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/components/Section.tsx`
- `src/components/Button.tsx`
- `src/components/Hero.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/FAQSection.tsx`
- `src/components/MotionSection.tsx`
