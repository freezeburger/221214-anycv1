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
                    <a href="index.html" data-type="index-link">atlas documentation</a>
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
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
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
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-baf05da21b35239915d3a58b858f7f93a9952a5f2b4dd94475491def2d312f8a984d86fa35db27f22ee542242963893d8efa2c4cdcd134f18eb3d8a9b9714e96"' : 'data-target="#xs-components-links-module-AppModule-baf05da21b35239915d3a58b858f7f93a9952a5f2b4dd94475491def2d312f8a984d86fa35db27f22ee542242963893d8efa2c4cdcd134f18eb3d8a9b9714e96"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-baf05da21b35239915d3a58b858f7f93a9952a5f2b4dd94475491def2d312f8a984d86fa35db27f22ee542242963893d8efa2c4cdcd134f18eb3d8a9b9714e96"' :
                                            'id="xs-components-links-module-AppModule-baf05da21b35239915d3a58b858f7f93a9952a5f2b4dd94475491def2d312f8a984d86fa35db27f22ee542242963893d8efa2c4cdcd134f18eb3d8a9b9714e96"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-c989f0741b6db11bdbb12caa546579ef6f4281c5f840d92ca253c1268e2927b886766087b45fc0cf7bf110ac0bd5a7ee9b8de20361e70ce79b4e54e8a595c657"' : 'data-target="#xs-injectables-links-module-CoreModule-c989f0741b6db11bdbb12caa546579ef6f4281c5f840d92ca253c1268e2927b886766087b45fc0cf7bf110ac0bd5a7ee9b8de20361e70ce79b4e54e8a595c657"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-c989f0741b6db11bdbb12caa546579ef6f4281c5f840d92ca253c1268e2927b886766087b45fc0cf7bf110ac0bd5a7ee9b8de20361e70ce79b4e54e8a595c657"' :
                                        'id="xs-injectables-links-module-CoreModule-c989f0741b6db11bdbb12caa546579ef6f4281c5f840d92ca253c1268e2927b886766087b45fc0cf7bf110ac0bd5a7ee9b8de20361e70ce79b4e54e8a595c657"' }>
                                        <li class="link">
                                            <a href="injectables/AuthMiddleware.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthMiddleware</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DispatcherService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DispatcherService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeatureLoginModule.html" data-type="entity-link" >FeatureLoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FeatureLoginModule-d85e52c59cfd6056d4ce7283cdbf5297f0d245ef82772aa72588f97baa6ec7f46b55edddb9131d81f9dbab96f59309a3fed51a6b5ef525cffa7ce75d8a3e0558"' : 'data-target="#xs-components-links-module-FeatureLoginModule-d85e52c59cfd6056d4ce7283cdbf5297f0d245ef82772aa72588f97baa6ec7f46b55edddb9131d81f9dbab96f59309a3fed51a6b5ef525cffa7ce75d8a3e0558"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeatureLoginModule-d85e52c59cfd6056d4ce7283cdbf5297f0d245ef82772aa72588f97baa6ec7f46b55edddb9131d81f9dbab96f59309a3fed51a6b5ef525cffa7ce75d8a3e0558"' :
                                            'id="xs-components-links-module-FeatureLoginModule-d85e52c59cfd6056d4ce7283cdbf5297f0d245ef82772aa72588f97baa6ec7f46b55edddb9131d81f9dbab96f59309a3fed51a6b5ef525cffa7ce75d8a3e0558"' }>
                                            <li class="link">
                                                <a href="components/FeatureLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeatureLoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeaturesModule.html" data-type="entity-link" >FeaturesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutsModule.html" data-type="entity-link" >LayoutsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutsModule-ebfb42944b16a56bbabb584a7cfc32f169c0748b82987454bea3586a4c2d35f8ad9a2a0b6d5a6efe06f1b02d971c67e782aa073ee0eb92246ff28c97f919c752"' : 'data-target="#xs-components-links-module-LayoutsModule-ebfb42944b16a56bbabb584a7cfc32f169c0748b82987454bea3586a4c2d35f8ad9a2a0b6d5a6efe06f1b02d971c67e782aa073ee0eb92246ff28c97f919c752"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutsModule-ebfb42944b16a56bbabb584a7cfc32f169c0748b82987454bea3586a4c2d35f8ad9a2a0b6d5a6efe06f1b02d971c67e782aa073ee0eb92246ff28c97f919c752"' :
                                            'id="xs-components-links-module-LayoutsModule-ebfb42944b16a56bbabb584a7cfc32f169c0748b82987454bea3586a4c2d35f8ad9a2a0b6d5a6efe06f1b02d971c67e782aa073ee0eb92246ff28c97f919c752"' }>
                                            <li class="link">
                                                <a href="components/LayoutDefaultComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutDefaultComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NgImportModule.html" data-type="entity-link" >NgImportModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageModule.html" data-type="entity-link" >PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageModule-11212d3911464598a0b769feff02cc53464f725926a08aa15d4940a0b6655bc176e36383b4abb64d41c8e44b86daf1c672fc9a777689ea208271139f82062ade"' : 'data-target="#xs-components-links-module-PageModule-11212d3911464598a0b769feff02cc53464f725926a08aa15d4940a0b6655bc176e36383b4abb64d41c8e44b86daf1c672fc9a777689ea208271139f82062ade"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageModule-11212d3911464598a0b769feff02cc53464f725926a08aa15d4940a0b6655bc176e36383b4abb64d41c8e44b86daf1c672fc9a777689ea208271139f82062ade"' :
                                            'id="xs-components-links-module-PageModule-11212d3911464598a0b769feff02cc53464f725926a08aa15d4940a0b6655bc176e36383b4abb64d41c8e44b86daf1c672fc9a777689ea208271139f82062ade"' }>
                                            <li class="link">
                                                <a href="components/PageHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageMessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageMessageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNewsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNewsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
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
                                    <a href="injectables/AuthMiddleware.html" data-type="entity-link" >AuthMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DispatcherService.html" data-type="entity-link" >DispatcherService</a>
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
                                <a href="guards/MessageGuard.html" data-type="entity-link" >MessageGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/NavigationService.html" data-type="entity-link" >NavigationService</a>
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
                                <a href="interfaces/ActionResult.html" data-type="entity-link" >ActionResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FArcticle.html" data-type="entity-link" >FArcticle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FCredentials.html" data-type="entity-link" >FCredentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FMessage.html" data-type="entity-link" >FMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FState.html" data-type="entity-link" >FState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TAction.html" data-type="entity-link" >TAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TAuthError.html" data-type="entity-link" >TAuthError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TAuthToken.html" data-type="entity-link" >TAuthToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TDispatcher.html" data-type="entity-link" >TDispatcher</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TError.html" data-type="entity-link" >TError</a>
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
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
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