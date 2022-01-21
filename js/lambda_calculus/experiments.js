Number.prototype.log = function() { console.log(this) };
Function.prototype.log = function() { console.log(this.toString()) };

let results

const IDENTITY = a => a
IDENTITY(3).log()

IDENTITY(IDENTITY).log()

const SELF = f => f(f)
SELF(IDENTITY).log()

const FIRST = a => _ => a
FIRST(2)(4).log()

const LAST = a => b => b
LAST(2)(4).log()

const FLIP = f => a => b => f(b)(a)
FLIP(LAST)(2)(4).log()
FLIP(FIRST)(2)(4).log()

const NEWLAST = a => b => FLIP(FIRST)(a)(b)
NEWLAST(2)(4).log()

//BOOLEAN TRUE or FALSE
//expression ? true : false
//TRUE ? <FIRST> : LAST
//FALSE ? LAST : <FIRST>
const TRUE = FIRST
const FALSE = LAST

TRUE.toString = () => 'True = (FIRST)'
FALSE.toString = () => 'False = (LAST)'

TRUE
FALSE

//NOT - unity operator
const NOT = a => a(FALSE)(TRUE)
NOT(FALSE).log()
NOT(TRUE).log()

//AND - binary operator
//TRUE && TRUE == TRUE
//TRUE && FALSE == FALSE
//FALSE && TRUE == FALSE
//FALSE && FALSE == FALSE
const AND = a => b => a(b)(FALSE)
AND(FALSE)(FALSE).log()
AND(FALSE)(TRUE).log()
AND(TRUE)(FALSE).log()
AND(TRUE)(TRUE).log()

//outra implementação do AND
const AND2 = a => b => a(b)(a)
AND2(FALSE)(FALSE).log()
AND2(FALSE)(TRUE).log()
AND2(TRUE)(FALSE).log()
AND2(TRUE)(TRUE).log()

//outra implementação do AND
const AND3 = a => b => b(a)(b)
AND3(FALSE)(FALSE).log()
AND3(FALSE)(TRUE).log()
AND3(TRUE)(FALSE).log()
AND3(TRUE)(TRUE).log()

//OR - binary operator
//TRUE || TRUE == TRUE
//TRUE || FALSE == TRUE
//FALSE || TRUE == TRUE
//FALSE || FALSE == FALSE
const OR = a => b => a(TRUE)(b)
OR(FALSE)(FALSE).log()
OR(FALSE)(TRUE).log()
OR(TRUE)(FALSE).log()
OR(TRUE)(TRUE).log()

const OR2 = a => b => a(a)(b)
OR2(FALSE)(FALSE).log()
OR2(FALSE)(TRUE).log()
OR2(TRUE)(FALSE).log()
OR2(TRUE)(TRUE).log()

//EQ = === - binary operator
//TRUE === TRUE = TRUE
//FALSE === FALSE = TRUE
//TRUE === FALSE = FALSE
//FALSE === TRUE = FALSE
const EQ = a => b => a(b)(NOT(b))
EQ(TRUE)(FALSE).log()
EQ(FALSE)(TRUE).log()
EQ(TRUE)(TRUE).log()
EQ(FALSE)(FALSE).log()
//XOR = === - binary operator
//TRUE === TRUE = FALSE
//FALSE === FALSE = FALSE
//TRUE === FALSE = TRUE
//FALSE === TRUE = TRUE
const XOR = a => b => NOT(EQ(a)(b))
XOR(TRUE)(FALSE).log()
XOR(FALSE)(TRUE).log()
XOR(TRUE)(TRUE).log()
XOR(FALSE)(FALSE).log()