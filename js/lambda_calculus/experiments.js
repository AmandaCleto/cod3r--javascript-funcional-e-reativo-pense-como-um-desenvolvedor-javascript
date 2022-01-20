let results

const IDENTITY = a => a
results = IDENTITY(3)
results

results = IDENTITY(IDENTITY)
results

const SELF = f => f(f)
results = SELF(IDENTITY)
results

const FIRST = a => _ => a
results = FIRST(2)(4)
results

const LAST = a => b => b
results = LAST(2)(4)
results

const FLIP = f => a => b => f(b)(a)
results = FLIP(LAST)(2)(4)
results
results = FLIP(FIRST)(2)(4)
results

const NEWLAST = a => b => FLIP(FIRST)(a)(b)
results = NEWLAST(2)(4)
results

//BOOLEAN TRUE or FALSE
//expression ? true : false
//TRUE ? <FIRST> : LAST
//FALSE ? LAST : <FIRST>

const TRUE = FIRST
const FALSE = LAST

TRUE.inspect = () => 'True = (FIRST)'
FALSE.inspect = () => 'False = (LAST)'

TRUE
FALSE

//NOT - unity operator
const NOT = a => a(FALSE)(TRUE)
results = NOT(FALSE)
results
results = NOT(TRUE)
results

//AND - binary operator
//TRUE && TRUE == TRUE
//TRUE && FALSE == FALSE
//FALSE && TRUE == FALSE
//FALSE && FALSE == FALSE
const AND = a => b => a(b)(FALSE)
results = AND(FALSE)(FALSE)
results
results = AND(FALSE)(TRUE)
results
results = AND(TRUE)(FALSE)
results
results = AND(TRUE)(TRUE)
results

//outra implementação do AND
const AND2 = a => b => a(b)(a)
results = AND2(FALSE)(FALSE)
results
results = AND2(FALSE)(TRUE)
results
results = AND2(TRUE)(FALSE)
results
results = AND2(TRUE)(TRUE)
results

//outra implementação do AND
const AND3 = a => b => b(a)(b)
results = AND3(FALSE)(FALSE)
results
results = AND3(FALSE)(TRUE)
results
results = AND3(TRUE)(FALSE)
results
results = AND3(TRUE)(TRUE)
results

//OR - binary operator
//TRUE || TRUE == TRUE
//TRUE || FALSE == TRUE
//FALSE || TRUE == TRUE
//FALSE || FALSE == FALSE
const OR = a => b => a(TRUE)(b)
results = OR(FALSE)(FALSE)
results
results = OR(FALSE)(TRUE)
results
results = OR(TRUE)(FALSE)
results
results = OR(TRUE)(TRUE)
results

const OR2 = a => b => a(a)(b)
results = OR2(FALSE)(FALSE)
results
results = OR2(FALSE)(TRUE)
results
results = OR2(TRUE)(FALSE)
results
results = OR2(TRUE)(TRUE)
results

//EQ = === - binary operator
//TRUE === TRUE = TRUE
//FALSE === FALSE = TRUE
//TRUE === FALSE = FALSE
//FALSE === TRUE = FALSE
const EQ = a => b => b(b)(FALSE)
results = EQ(TRUE)(FALSE)
results
results = EQ(FALSE)(TRUE)
results
results = EQ(TRUE)(TRUE)
results
results = EQ(FALSE)(FALSE)
results