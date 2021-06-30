'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">gateway documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-4506d322811c082daaf5c41eb4da0eef"' : 'data-target="#xs-controllers-links-module-AppModule-4506d322811c082daaf5c41eb4da0eef"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-4506d322811c082daaf5c41eb4da0eef"' :
                                            'id="xs-controllers-links-module-AppModule-4506d322811c082daaf5c41eb4da0eef"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-2a95a5d6f246cac4e9a2913bf43150ea"' : 'data-target="#xs-controllers-links-module-AuthModule-2a95a5d6f246cac4e9a2913bf43150ea"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-2a95a5d6f246cac4e9a2913bf43150ea"' :
                                            'id="xs-controllers-links-module-AuthModule-2a95a5d6f246cac4e9a2913bf43150ea"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-2a95a5d6f246cac4e9a2913bf43150ea"' : 'data-target="#xs-injectables-links-module-AuthModule-2a95a5d6f246cac4e9a2913bf43150ea"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-2a95a5d6f246cac4e9a2913bf43150ea"' :
                                        'id="xs-injectables-links-module-AuthModule-2a95a5d6f246cac4e9a2913bf43150ea"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompanyModule.html" data-type="entity-link">CompanyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CompanyModule-3b9fc472c861182df032c71bec94a5b6"' : 'data-target="#xs-controllers-links-module-CompanyModule-3b9fc472c861182df032c71bec94a5b6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CompanyModule-3b9fc472c861182df032c71bec94a5b6"' :
                                            'id="xs-controllers-links-module-CompanyModule-3b9fc472c861182df032c71bec94a5b6"' }>
                                            <li class="link">
                                                <a href="controllers/CompanyController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CompanyController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CompanyModule-3b9fc472c861182df032c71bec94a5b6"' : 'data-target="#xs-injectables-links-module-CompanyModule-3b9fc472c861182df032c71bec94a5b6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CompanyModule-3b9fc472c861182df032c71bec94a5b6"' :
                                        'id="xs-injectables-links-module-CompanyModule-3b9fc472c861182df032c71bec94a5b6"' }>
                                        <li class="link">
                                            <a href="injectables/CompanyService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CompanyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/JobModule.html" data-type="entity-link">JobModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-JobModule-e3c7a38dca9bc25a66490d513d0dc1f3"' : 'data-target="#xs-controllers-links-module-JobModule-e3c7a38dca9bc25a66490d513d0dc1f3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-JobModule-e3c7a38dca9bc25a66490d513d0dc1f3"' :
                                            'id="xs-controllers-links-module-JobModule-e3c7a38dca9bc25a66490d513d0dc1f3"' }>
                                            <li class="link">
                                                <a href="controllers/JobController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">JobController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-JobModule-e3c7a38dca9bc25a66490d513d0dc1f3"' : 'data-target="#xs-injectables-links-module-JobModule-e3c7a38dca9bc25a66490d513d0dc1f3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JobModule-e3c7a38dca9bc25a66490d513d0dc1f3"' :
                                        'id="xs-injectables-links-module-JobModule-e3c7a38dca9bc25a66490d513d0dc1f3"' }>
                                        <li class="link">
                                            <a href="injectables/JobService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JobService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LanguageModule.html" data-type="entity-link">LanguageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LanguageModule-e814e712782f81d38372aeccbeaa810d"' : 'data-target="#xs-controllers-links-module-LanguageModule-e814e712782f81d38372aeccbeaa810d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LanguageModule-e814e712782f81d38372aeccbeaa810d"' :
                                            'id="xs-controllers-links-module-LanguageModule-e814e712782f81d38372aeccbeaa810d"' }>
                                            <li class="link">
                                                <a href="controllers/LanguageController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LanguageController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LanguageModule-e814e712782f81d38372aeccbeaa810d"' : 'data-target="#xs-injectables-links-module-LanguageModule-e814e712782f81d38372aeccbeaa810d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LanguageModule-e814e712782f81d38372aeccbeaa810d"' :
                                        'id="xs-injectables-links-module-LanguageModule-e814e712782f81d38372aeccbeaa810d"' }>
                                        <li class="link">
                                            <a href="injectables/LanguageService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LanguageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReviewModule.html" data-type="entity-link">ReviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ReviewModule-4be8508fa02d111336bb089d20e7abb7"' : 'data-target="#xs-controllers-links-module-ReviewModule-4be8508fa02d111336bb089d20e7abb7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ReviewModule-4be8508fa02d111336bb089d20e7abb7"' :
                                            'id="xs-controllers-links-module-ReviewModule-4be8508fa02d111336bb089d20e7abb7"' }>
                                            <li class="link">
                                                <a href="controllers/ReviewController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReviewController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchModule.html" data-type="entity-link">SearchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SearchModule-3e5499314afa399b863df16166b12f0c"' : 'data-target="#xs-controllers-links-module-SearchModule-3e5499314afa399b863df16166b12f0c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SearchModule-3e5499314afa399b863df16166b12f0c"' :
                                            'id="xs-controllers-links-module-SearchModule-3e5499314afa399b863df16166b12f0c"' }>
                                            <li class="link">
                                                <a href="controllers/SearchController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SearchModule-3e5499314afa399b863df16166b12f0c"' : 'data-target="#xs-injectables-links-module-SearchModule-3e5499314afa399b863df16166b12f0c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SearchModule-3e5499314afa399b863df16166b12f0c"' :
                                        'id="xs-injectables-links-module-SearchModule-3e5499314afa399b863df16166b12f0c"' }>
                                        <li class="link">
                                            <a href="injectables/SearchService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SearchService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-dbd80a628905acac749e7cde2625df35"' : 'data-target="#xs-controllers-links-module-UserModule-dbd80a628905acac749e7cde2625df35"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-dbd80a628905acac749e7cde2625df35"' :
                                            'id="xs-controllers-links-module-UserModule-dbd80a628905acac749e7cde2625df35"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AllExceptionsFilter.html" data-type="entity-link">AllExceptionsFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/CompanySize.html" data-type="entity-link">CompanySize</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigService.html" data-type="entity-link">ConfigService</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCompanyDto.html" data-type="entity-link">CreateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateForgotPasswordDto.html" data-type="entity-link">CreateForgotPasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateJobDto.html" data-type="entity-link">CreateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateReviewDto.html" data-type="entity-link">CreateReviewDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link">CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link">HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserDto.html" data-type="entity-link">LoginUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshAccessTokenDto.html" data-type="entity-link">RefreshAccessTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetPasswordDto.html" data-type="entity-link">ResetPasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpDto.html" data-type="entity-link">SignUpDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SingleFileDto.html" data-type="entity-link">SingleFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/StartNumber.html" data-type="entity-link">StartNumber</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCompanyDto.html" data-type="entity-link">UpdateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateJobDto.html" data-type="entity-link">UpdateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateReviewDto.html" data-type="entity-link">UpdateReviewDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VerifyUuidDto.html" data-type="entity-link">VerifyUuidDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WorkTime.html" data-type="entity-link">WorkTime</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link">AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExceptionInterceptor.html" data-type="entity-link">ExceptionInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingInterceptor.html" data-type="entity-link">LoggingInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link">TransformInterceptor</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link">RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ExceptionError.html" data-type="entity-link">ExceptionError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JwtPayload.html" data-type="entity-link">JwtPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MessagePatternInterface.html" data-type="entity-link">MessagePatternInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link">Response</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});