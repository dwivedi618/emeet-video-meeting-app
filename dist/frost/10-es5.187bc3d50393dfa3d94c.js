!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"305l":function(e,n,o){"use strict";o.r(n),o.d(n,"AuthModule",(function(){return D}));var a=o("ofXK"),r=o("3Pt+"),s=function(){function e(){t(this,e),this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"}return i(e,null,[{key:"emailorphone",value:function(t){return e.isEmailOrPhone()(t)}},{key:"isEmailOrPhone",value:function(){return function(t){if(!t.value)return{emailorphone:"Enter Email Or Phone"};var e=/^((\\+91-?)|0)?[0-9]{10}$/.test(t.value);return/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(t.value)||e?null:{emailorphone:"Not a valid Email Or Phone"}}}}]),e}(),c=function(){function e(){t(this,e)}return i(e,null,[{key:"isEmail",value:function(t){return/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(t)}},{key:"isPhone",value:function(t){return/^((\\+91-?)|0)?[0-9]{10}$/.test(t)}}]),e}(),l=o("R0Ic");Object(l.n)("slideInOut",[Object(l.k)("in",Object(l.l)({"max-height":"500px",opacity:"1",visibility:"visible"})),Object(l.k)("out",Object(l.l)({"max-height":"0px",opacity:"0",visibility:"hidden"})),Object(l.m)("in => out",[Object(l.g)([Object(l.e)("400ms ease-in-out",Object(l.l)({opacity:"0"})),Object(l.e)("600ms ease-in-out",Object(l.l)({"max-height":"0px"})),Object(l.e)("700ms ease-in-out",Object(l.l)({visibility:"hidden"}))])]),Object(l.m)("out => in",[Object(l.g)([Object(l.e)("1ms ease-in-out",Object(l.l)({visibility:"visible"})),Object(l.e)("600ms ease-in-out",Object(l.l)({"max-height":"500px"})),Object(l.e)("800ms ease-in-out",Object(l.l)({opacity:"1"}))])])]),Object(l.n)("detailExpand",[Object(l.k)("collapsed",Object(l.l)({height:"0px",minHeight:"0",visibility:"hidden",opacity:"0"})),Object(l.k)("expanded",Object(l.l)({height:"*"})),Object(l.m)("expanded <=> collapsed",Object(l.e)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))]);var u,b,m=[Object(l.n)("detailExpand",[Object(l.k)("collapsed",Object(l.l)({width:"50px",minWidth:"50px"})),Object(l.k)("expanded",Object(l.l)({width:"100px"})),Object(l.m)("expanded <=> collapsed",Object(l.e)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])],p=o("fXoL"),d=o("AytR"),h=o("tk/3"),f=((u=function(){function e(i){t(this,e),this.http=i}return i(e,[{key:"userLogin",value:function(t){return this.http.post(d.a.apiUrl+"/v1/user/login",t)}},{key:"userSignup",value:function(t){return this.http.post(d.a.apiUrl+"/v1/user/signup",t)}}]),e}()).\u0275fac=function(t){return new(t||u)(p.Vb(h.a))},u.\u0275prov=p.Hb({token:u,factory:u.\u0275fac,providedIn:"root"}),u),g=o("Wp6s"),v=o("kmnG"),y=o("qFsG"),R=o("bTqV"),w=((b=function(){function e(){t(this,e)}return i(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||b)},b.\u0275cmp=p.Fb({type:b,selectors:[["app-third-party-api-login-signup"]],decls:7,vars:0,consts:[[1,"d-flex","justify-content-center"],["mat-button","",1,"mx-1","w-100"],["src","../../../../assets/svg/social/icons8-google.svg","alt","","width","32"],["src","../../../../assets/svg/social/icons8-facebook-logo.svg","alt","","width","32"],["src","../../../../assets/svg/social/icons8-linkedin-circled.svg","alt","","width","32"]],template:function(t,e){1&t&&(p.Rb(0,"div",0),p.Rb(1,"button",1),p.Mb(2,"img",2),p.Qb(),p.Rb(3,"button",1),p.Mb(4,"img",3),p.Qb(),p.Rb(5,"button",1),p.Mb(6,"img",4),p.Qb(),p.Qb())},directives:[R.a],styles:[""]}),b),O=o("tyNb");function k(t,e){if(1&t&&(p.Rb(0,"mat-error",1),p.Bc(1),p.Qb()),2&t){var i=p.dc();p.Ab(1),p.Cc(null==i.loginForm.get("emailOrPhone").errors?null:i.loginForm.get("emailOrPhone").errors.emailorphone)}}function Q(t,e){1&t&&(p.Rb(0,"small"),p.Bc(1,"Please Wait..."),p.Qb())}function x(t,e){1&t&&(p.Rb(0,"small"),p.Bc(1,"Login"),p.Qb())}var A,P,j,B,F=((P=function(){function e(i,n){t(this,e),this.formBuilder=i,this.authService=n,this.isPasswordHidden=!0,this.isLogging=!1,this.expandAnimation="collapsed"}return i(e,[{key:"ngOnInit",value:function(){this.initializeLoginForm()}},{key:"initializeLoginForm",value:function(){this.loginForm=this.formBuilder.group({emailOrPhone:["",s.isEmailOrPhone()],email:[],phoneNumber:[],password:["",[r.m.required,r.m.minLength(4)]]})}},{key:"submitLoginCredential",value:function(){var t=this;this.isLogging=!0,this.loginForm.invalid?this.isLogging=!1:(this.patchOnlyEmailOrPhone(this.loginForm.value.emailOrPhone),this.authService.userLogin(this.loginForm.value).subscribe((function(e){t.isLogging=!1,console.log("login result",e)}),(function(e){t.isLogging=!1})))}},{key:"patchOnlyEmailOrPhone",value:function(t){var e=c.isEmail(t),i=c.isPhone(t);return e?(this.loginForm.patchValue({email:t}),void this.loginForm.patchValue({phoneNumber:null})):i?(this.loginForm.patchValue({phoneNumber:t}),void this.loginForm.patchValue({email:null})):void 0}},{key:"toggleAnimation",value:function(){this.expandAnimation="expanded"===this.expandAnimation?"collapsed":"expanded",console.log(this.expandAnimation)}}]),e}()).\u0275fac=function(t){return new(t||P)(p.Lb(r.b),p.Lb(f))},P.\u0275cmp=p.Fb({type:P,selectors:[["app-login"]],decls:33,vars:9,consts:[[1,"layout",2,"width","100vw","height","100vh"],[1,""],["id","form",1,"login-form","p-5",2,"min-width","20rem",3,"formGroup"],[1,"box_shadow_1","px-md-5",2,"width","25rem","font-size","12px"],[1,"text-center","text-uppercase"],["appearance","outline",1,"w-100"],["matInput","","type","email","placeholder","email or phone","formControlName","emailOrPhone"],["class","",4,"ngIf"],["matInput","","placeholder","Password","formControlName","password",3,"type"],["mat-button","","type","button","matSuffix","",1,"",3,"click"],[1,"pt-0"],["mat-button","","type","button",1,"float-right"],["mat-raised-button","","id","preview","type","submit","color","primary",1,"w-100",3,"click"],[4,"ngIf"],[1,"text-center","mt-2",2,"font-weight","600","color","#ccc"],[1,"animate__animated","animate__fadeIn"],["mat-button","","type","button","routerLink","./signup",1,"w-100","animate__animated","animate__fadeIn"],[1,"text-center"]],template:function(t,e){1&t&&(p.Rb(0,"section",0),p.Rb(1,"div",1),p.Rb(2,"div",1),p.Rb(3,"form",2),p.Rb(4,"mat-card",3),p.Rb(5,"h1",4),p.Bc(6,"Login"),p.Qb(),p.Rb(7,"mat-form-field",5),p.Rb(8,"mat-label"),p.Bc(9,"Email Or Phone "),p.Qb(),p.Mb(10,"input",6),p.Ac(11,k,2,1,"mat-error",7),p.Qb(),p.Rb(12,"mat-form-field",5),p.Rb(13,"mat-label"),p.Bc(14,"Password"),p.Qb(),p.Mb(15,"input",8),p.Rb(16,"button",9),p.Zb("click",(function(){return e.isPasswordHidden=!e.isPasswordHidden})),p.Rb(17,"small",10),p.Bc(18),p.ec(19,"uppercase"),p.Qb(),p.Qb(),p.Qb(),p.Rb(20,"button",11),p.Rb(21,"small"),p.Bc(22,"Need Help?"),p.Qb(),p.Qb(),p.Rb(23,"button",12),p.Zb("click",(function(){return e.submitLoginCredential()})),p.Ac(24,Q,2,0,"small",13),p.Ac(25,x,2,0,"small",13),p.Qb(),p.Rb(26,"h3",14),p.Bc(27," OR CONTINUE WITH"),p.Qb(),p.Mb(28,"app-third-party-api-login-signup",15),p.Mb(29,"hr"),p.Rb(30,"button",16),p.Rb(31,"small",17),p.Bc(32,"CREATE NEW ACCOUNT"),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Qb()),2&t&&(p.Ab(3),p.ic("formGroup",e.loginForm),p.Ab(8),p.ic("ngIf",null==e.loginForm.get("emailOrPhone").errors?null:e.loginForm.get("emailOrPhone").errors.emailorphone),p.Ab(4),p.jc("type",e.isPasswordHidden?"password":"text"),p.Ab(3),p.Cc(p.fc(19,7,e.isPasswordHidden?"Show":"Hide")),p.Ab(5),p.ic("@detailExpand",e.expandAnimation),p.Ab(1),p.ic("ngIf",e.isLogging),p.Ab(1),p.ic("ngIf",!e.isLogging))},directives:[r.n,r.i,r.d,g.a,v.c,v.f,y.a,r.a,r.h,r.c,a.k,R.a,v.g,w,O.f,v.b],pipes:[a.r],styles:[""],data:{animation:[m]}}),P),I=((A=function(){function e(){t(this,e)}return i(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||A)},A.\u0275cmp=p.Fb({type:A,selectors:[["app-auth-layout"]],decls:1,vars:0,template:function(t,e){1&t&&p.Mb(0,"router-outlet")},directives:[O.h],styles:[""]}),A),N=o("XNiG"),L=o("dNgK"),C=o("0IaG"),E=o("NFeN"),_=((B=function(){function e(i,n,o){t(this,e),this.snackBar=i,this.snackBarRef=n,this.data=o,o&&(this.message=o.message,this.action=o.action),console.log(o,this.message,this.action)}return i(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||B)(p.Lb(L.b),p.Lb(L.d),p.Lb(L.a,8))},B.\u0275cmp=p.Fb({type:B,selectors:[["app-alert-with-action"]],decls:17,vars:4,consts:[[1,"text-center"],[1,"text-center","d-flex","justify-centent-start","align-items-center","mb-2"],[1,"text-warning"],[1,"px-2"],[1,"my-5"],["matInput","","type","number","placeholder","OTP"],["mat-dialog-action","",1,"d-flex"],["mat-button","",1,"w-50","mr-1",3,"click"],["mat-button","","cdkFocusInitial","",1,"w-50","btn-mydark",3,"click"]],template:function(t,e){1&t&&(p.Rb(0,"mat-dialog-content",0),p.Rb(1,"div",1),p.Rb(2,"mat-icon",2),p.Bc(3," lightbulb "),p.Qb(),p.Rb(4,"small",3),p.Bc(5),p.Qb(),p.Qb(),p.Rb(6,"div",4),p.Rb(7,"mat-form-field"),p.Mb(8,"input",5),p.Qb(),p.Qb(),p.Qb(),p.Rb(9,"div",6),p.Rb(10,"button",7),p.Zb("click",(function(){return e.snackBarRef.dismiss()})),p.Rb(11,"small"),p.Bc(12,"Close"),p.Qb(),p.Qb(),p.Rb(13,"button",8),p.Zb("click",(function(){return e.snackBarRef.dismissWithAction()})),p.Rb(14,"small"),p.Bc(15),p.ec(16,"titlecase"),p.Qb(),p.Qb(),p.Qb()),2&t&&(p.Ab(5),p.Cc(e.message),p.Ab(10),p.Cc(p.fc(16,2,e.action)))},directives:[C.d,E.a,v.c,y.a,R.a],pipes:[a.q],styles:[""]}),B),z=((j=function(){function e(i){t(this,e),this.snackBar=i,this.action=new N.a}return i(e,[{key:"setAction",value:function(t){this.action.next(t)}},{key:"resetAction",value:function(){this.action.next()}},{key:"alert",value:function(t,e){this.snackBar.open(t,e,{duration:6e3})}},{key:"alertLb",value:function(t,e){this.snackBar.open(t,e,{duration:3e3,horizontalPosition:"left",verticalPosition:"bottom"})}},{key:"alertRT",value:function(t,e){this.snackBar.open(t,e,{duration:3e3,horizontalPosition:"right",verticalPosition:"top"})}},{key:"alertError",value:function(t,e,i){this.snackBar.open(t,e,{duration:2e3,verticalPosition:"top",horizontalPosition:"end",panelClass:[i]})}},{key:"alertWithAction",value:function(t,e){var i=this;return this.snackBar.openFromComponent(_,{data:{message:t,action:e},horizontalPosition:"center"}).onAction().subscribe((function(){i.setAction(e)})),this.action.asObservable()}}]),e}()).\u0275fac=function(t){return new(t||j)(p.Vb(L.b))},j.\u0275prov=p.Hb({token:j,factory:j.\u0275fac,providedIn:"any"}),j);function H(t,e){if(1&t&&(p.Rb(0,"mat-error",1),p.Bc(1),p.Qb()),2&t){var i=p.dc();p.Ab(1),p.Dc(" ",null==i.signupForm.get("phoneNumber").errors?null:i.signupForm.get("phoneNumber").errors.required,"")}}function S(t,e){if(1&t&&(p.Rb(0,"mat-error",1),p.Bc(1),p.Qb()),2&t){var i=p.dc();p.Ab(1),p.Dc(" ",null==i.signupForm.get("lastName").errors?null:i.signupForm.get("lastName").errors.required,"")}}function M(t,e){if(1&t&&(p.Rb(0,"mat-error",1),p.Bc(1),p.Qb()),2&t){var i=p.dc();p.Ab(1),p.Dc(" ",null==i.signupForm.get("email").errors?null:i.signupForm.get("email").errors.email,"")}}function T(t,e){1&t&&(p.Rb(0,"small"),p.Bc(1,"Please Wait..."),p.Qb())}function q(t,e){1&t&&(p.Rb(0,"small"),p.Bc(1,"Sign Up"),p.Qb())}var W,G,U,V=[{path:"",component:I,children:[{path:"",component:F},{path:"signup",component:(W=function(){function e(i,n,o){t(this,e),this.formBuilder=i,this.authService=n,this.alertService=o,this.isPasswordHidden=!0,this.isSigning=!1,this.expandAnimation="collapsed",this.phonePattern="sdfsd"}return i(e,[{key:"ngOnInit",value:function(){this.initializesignupForm()}},{key:"initializesignupForm",value:function(){this.signupForm=this.formBuilder.group({email:["",[r.m.required,r.m.email]],phoneNumber:["",[r.m.required,r.m.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],firstName:[],lastName:[],password:["",[r.m.required,r.m.minLength(4)]]})}},{key:"submitLoginCredential",value:function(){var t=this;this.isSigning=!0,this.verifyOtp(),this.authService.userSignup(this.signupForm.value).subscribe((function(e){t.isSigning=!1,console.log("login result",e)}),(function(e){t.isSigning=!1}))}},{key:"verifyOtp",value:function(){this.alertService.alertWithAction("Please verify your account by OTP sent to registered Email and Phone","verify").subscribe((function(t){}))}}]),e}(),W.\u0275fac=function(t){return new(t||W)(p.Lb(r.b),p.Lb(f),p.Lb(z))},W.\u0275cmp=p.Fb({type:W,selectors:[["app-signup"]],decls:46,vars:10,consts:[[1,"layout",2,"width","100vw","height","100vh"],[1,""],["id","form",1,"login-form","p-5",2,"min-width","15rem",3,"formGroup"],[1,"box_shadow_1","px-md-5",2,"width","25rem","font-size","12px"],[1,"text-center","text-uppercase"],[1,"row"],[1,"col-md-6"],["appearance","outline",1,"w-100"],["matInput","","type","text","placeholder","Ex : John","formControlName","firstName"],["class","",4,"ngIf"],["matInput","","type","text","placeholder","Ex : Doe","formControlName","lastName"],["matInput","","type","email","placeholder","email ","formControlName","email"],["matInput","","placeholder","Password","formControlName","password",3,"type"],["mat-button","","type","button","matSuffix","",1,"",3,"click"],[1,"pt-0"],["mat-button","","type","button",1,"float-right"],["mat-raised-button","","type","submit","color","primary",1,"w-100",3,"click"],[4,"ngIf"],[1,"text-center","mt-2",2,"font-weight","600","color","#ccc"],[1,"animate__animated","animate__fadeIn"],["mat-button","","type","button","routerLink","../",1,"w-100","animate__animated","animate__fadeIn"],[1,"text-center"]],template:function(t,e){1&t&&(p.Rb(0,"section",0),p.Rb(1,"div",1),p.Rb(2,"div",1),p.Rb(3,"form",2),p.Rb(4,"mat-card",3),p.Rb(5,"h1",4),p.Bc(6,"Sign Up"),p.Qb(),p.Rb(7,"div",5),p.Rb(8,"div",6),p.Rb(9,"mat-form-field",7),p.Rb(10,"mat-label"),p.Bc(11,"First name"),p.Qb(),p.Mb(12,"input",8),p.Ac(13,H,2,1,"mat-error",9),p.Qb(),p.Qb(),p.Rb(14,"div",6),p.Rb(15,"mat-form-field",7),p.Rb(16,"mat-label"),p.Bc(17,"Last name"),p.Qb(),p.Mb(18,"input",10),p.Ac(19,S,2,1,"mat-error",9),p.Qb(),p.Qb(),p.Qb(),p.Rb(20,"mat-form-field",7),p.Rb(21,"mat-label"),p.Bc(22,"Email"),p.Qb(),p.Mb(23,"input",11),p.Ac(24,M,2,1,"mat-error",9),p.Qb(),p.Rb(25,"mat-form-field",7),p.Rb(26,"mat-label"),p.Bc(27,"Password"),p.Qb(),p.Mb(28,"input",12),p.Rb(29,"button",13),p.Zb("click",(function(){return e.isPasswordHidden=!e.isPasswordHidden})),p.Rb(30,"small",14),p.Bc(31),p.ec(32,"uppercase"),p.Qb(),p.Qb(),p.Qb(),p.Rb(33,"button",15),p.Rb(34,"small"),p.Bc(35,"Need Help?"),p.Qb(),p.Qb(),p.Rb(36,"button",16),p.Zb("click",(function(){return e.submitLoginCredential()})),p.Ac(37,T,2,0,"small",17),p.Ac(38,q,2,0,"small",17),p.Qb(),p.Rb(39,"h3",18),p.Bc(40," OR CONTINUE WITH"),p.Qb(),p.Mb(41,"app-third-party-api-login-signup",19),p.Mb(42,"hr"),p.Rb(43,"button",20),p.Rb(44,"small",21),p.Bc(45,"ALREADY HAVE AN ACCOUNT"),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Qb()),2&t&&(p.Ab(3),p.ic("formGroup",e.signupForm),p.Ab(10),p.ic("ngIf",null==e.signupForm.get("firstName").errors?null:e.signupForm.get("firstName").errors.required),p.Ab(6),p.ic("ngIf",null==e.signupForm.get("lastName").errors?null:e.signupForm.get("lastName").errors.required),p.Ab(5),p.ic("ngIf",null==e.signupForm.get("email").errors?null:e.signupForm.get("email").errors.email),p.Ab(4),p.jc("type",e.isPasswordHidden?"password":"text"),p.Ab(3),p.Cc(p.fc(32,8,e.isPasswordHidden?"Show":"Hide")),p.Ab(6),p.ic("ngIf",e.isSigning),p.Ab(1),p.ic("ngIf",!e.isSigning))},directives:[r.n,r.i,r.d,g.a,v.c,v.f,y.a,r.a,r.h,r.c,a.k,R.a,v.g,w,O.f,v.b],pipes:[a.r],styles:[""]}),W)}]}],Z=((G=function e(){t(this,e)}).\u0275mod=p.Jb({type:G}),G.\u0275inj=p.Ib({factory:function(t){return new(t||G)},imports:[[O.g.forChild(V)],O.g]}),G),$=o("5+jW"),D=((U=function e(){t(this,e)}).\u0275mod=p.Jb({type:U}),U.\u0275inj=p.Ib({factory:function(t){return new(t||U)},providers:[],imports:[[a.c,$.a,Z]]}),U)}}])}();