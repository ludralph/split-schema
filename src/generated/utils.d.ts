import * as runtime from '@prisma/client/runtime/library';
// import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

import { 
    ab_email_domainFindUniqueArgs, 
    $ab_email_domainPayload, 
    ab_email_domainFieldRefs,
    ab_email_domainFindUniqueOrThrowArgs,
    ab_email_domainFindFirstArgs,
    ab_email_domainFindFirstOrThrowArgs,
    ab_email_domainFindManyArgs,
    ab_email_domainCreateArgs,
    ab_email_domainCreateManyArgs,
    ab_email_domainDeleteArgs,
    ab_email_domainUpdateArgs,
    ab_email_domainDeleteManyArgs,
    ab_email_domainUpdateManyArgs,
    ab_email_domainUpsertArgs,
    Ab_email_domainAggregateArgs,
    ab_email_domainGroupByArgs,
    AggregateAb_email_domain,
    Ab_email_domainGroupByOutputType,
    ab_email_domainCountArgs,
    Ab_email_domainCountAggregateOutputType,
    Prisma__ab_email_domainClient,
    GetAb_email_domainAggregateType,
    GetAb_email_domainGroupByPayload

}  from './ab_email_domain';
import { 
    $ab_camp_userPayload, Ab_camp_userAggregateArgs, Ab_camp_userCountAggregateOutputType, Ab_camp_userGroupByOutputType, AggregateAb_camp_user, ab_camp_userCountArgs, ab_camp_userCreateArgs, ab_camp_userCreateManyArgs, ab_camp_userDeleteArgs, ab_camp_userDeleteManyArgs, ab_camp_userFieldRefs, ab_camp_userFindFirstArgs, ab_camp_userFindFirstOrThrowArgs, ab_camp_userFindManyArgs, ab_camp_userFindUniqueArgs, ab_camp_userFindUniqueOrThrowArgs, ab_camp_userGroupByArgs, ab_camp_userUpdateArgs, ab_camp_userUpdateManyArgs, ab_camp_userUpsertArgs,
} from './ab_camp_user';
import { $ab_camp_auditPayload, ab_camp_auditFieldRefs, ab_camp_auditFindUniqueArgs, ab_camp_auditFindUniqueOrThrowArgs, ab_camp_auditFindFirstArgs, ab_camp_auditFindFirstOrThrowArgs, ab_camp_auditFindManyArgs, ab_camp_auditCreateArgs, ab_camp_auditCreateManyArgs, ab_camp_auditDeleteArgs, ab_camp_auditUpdateArgs, ab_camp_auditDeleteManyArgs, ab_camp_auditUpdateManyArgs, ab_camp_auditUpsertArgs, Ab_camp_auditAggregateArgs, AggregateAb_camp_audit, ab_camp_auditGroupByArgs, Ab_camp_auditGroupByOutputType, ab_camp_auditCountArgs, Ab_camp_auditCountAggregateOutputType 
} from './ab_camp_audit';
import { $ab_training_envPayload, ab_training_envFieldRefs, ab_training_envFindUniqueArgs, ab_training_envFindUniqueOrThrowArgs, ab_training_envFindFirstArgs, ab_training_envFindFirstOrThrowArgs, ab_training_envFindManyArgs, ab_training_envCreateArgs, ab_training_envCreateManyArgs, ab_training_envDeleteArgs, ab_training_envUpdateArgs, ab_training_envDeleteManyArgs, ab_training_envUpdateManyArgs, ab_training_envUpsertArgs, Ab_training_envAggregateArgs, AggregateAb_training_env, ab_training_envGroupByArgs, Ab_training_envGroupByOutputType, ab_training_envCountArgs, Ab_training_envCountAggregateOutputType 
} from './ab_training_env';
import { $admin_event_entityPayload, admin_event_entityFieldRefs, admin_event_entityFindUniqueArgs, admin_event_entityFindUniqueOrThrowArgs, admin_event_entityFindFirstArgs, admin_event_entityFindFirstOrThrowArgs, admin_event_entityFindManyArgs, admin_event_entityCreateArgs, admin_event_entityCreateManyArgs, admin_event_entityDeleteArgs, admin_event_entityUpdateArgs, admin_event_entityDeleteManyArgs, admin_event_entityUpdateManyArgs, admin_event_entityUpsertArgs, Admin_event_entityAggregateArgs, AggregateAdmin_event_entity, admin_event_entityGroupByArgs, Admin_event_entityGroupByOutputType, admin_event_entityCountArgs, Admin_event_entityCountAggregateOutputType } from './admin_event_entity';
import { $associated_policyPayload, associated_policyFieldRefs, associated_policyFindUniqueArgs, associated_policyFindUniqueOrThrowArgs, associated_policyFindFirstArgs, associated_policyFindFirstOrThrowArgs, associated_policyFindManyArgs, associated_policyCreateArgs, associated_policyCreateManyArgs, associated_policyDeleteArgs, associated_policyUpdateArgs, associated_policyDeleteManyArgs, associated_policyUpdateManyArgs, associated_policyUpsertArgs, Associated_policyAggregateArgs, AggregateAssociated_policy, associated_policyGroupByArgs, Associated_policyGroupByOutputType, associated_policyCountArgs, Associated_policyCountAggregateOutputType } from './associated_policy';
import { $authentication_executionPayload, authentication_executionFieldRefs, authentication_executionFindUniqueArgs, authentication_executionFindUniqueOrThrowArgs, authentication_executionFindFirstArgs, authentication_executionFindFirstOrThrowArgs, authentication_executionFindManyArgs, authentication_executionCreateArgs, authentication_executionCreateManyArgs, authentication_executionDeleteArgs, authentication_executionUpdateArgs, authentication_executionDeleteManyArgs, authentication_executionUpdateManyArgs, authentication_executionUpsertArgs, Authentication_executionAggregateArgs, AggregateAuthentication_execution, authentication_executionGroupByArgs, Authentication_executionGroupByOutputType, authentication_executionCountArgs, Authentication_executionCountAggregateOutputType } from './authentication_execution';
import { $authentication_flowPayload, authentication_flowFieldRefs, authentication_flowFindUniqueArgs, authentication_flowFindUniqueOrThrowArgs, authentication_flowFindFirstArgs, authentication_flowFindFirstOrThrowArgs, authentication_flowFindManyArgs, authentication_flowCreateArgs, authentication_flowCreateManyArgs, authentication_flowDeleteArgs, authentication_flowUpdateArgs, authentication_flowDeleteManyArgs, authentication_flowUpdateManyArgs, authentication_flowUpsertArgs, Authentication_flowAggregateArgs, AggregateAuthentication_flow, authentication_flowGroupByArgs, Authentication_flowGroupByOutputType, authentication_flowCountArgs, Authentication_flowCountAggregateOutputType } from './authentication_flow';
import { $authenticator_configPayload, authenticator_configFieldRefs, authenticator_configFindUniqueArgs, authenticator_configFindUniqueOrThrowArgs, authenticator_configFindFirstArgs, authenticator_configFindFirstOrThrowArgs, authenticator_configFindManyArgs, authenticator_configCreateArgs, authenticator_configCreateManyArgs, authenticator_configDeleteArgs, authenticator_configUpdateArgs, authenticator_configDeleteManyArgs, authenticator_configUpdateManyArgs, authenticator_configUpsertArgs, Authenticator_configAggregateArgs, AggregateAuthenticator_config, authenticator_configGroupByArgs, Authenticator_configGroupByOutputType, authenticator_configCountArgs, Authenticator_configCountAggregateOutputType } from './authenticator_config';
import { $authenticator_config_entryPayload, authenticator_config_entryFieldRefs, authenticator_config_entryFindUniqueArgs, authenticator_config_entryFindUniqueOrThrowArgs, authenticator_config_entryFindFirstArgs, authenticator_config_entryFindFirstOrThrowArgs, authenticator_config_entryFindManyArgs, authenticator_config_entryCreateArgs, authenticator_config_entryCreateManyArgs, authenticator_config_entryDeleteArgs, authenticator_config_entryUpdateArgs, authenticator_config_entryDeleteManyArgs, authenticator_config_entryUpdateManyArgs, authenticator_config_entryUpsertArgs, Authenticator_config_entryAggregateArgs, AggregateAuthenticator_config_entry, authenticator_config_entryGroupByArgs, Authenticator_config_entryGroupByOutputType, authenticator_config_entryCountArgs, Authenticator_config_entryCountAggregateOutputType } from './authenticator_config_entry';
import { $broker_linkPayload, broker_linkFieldRefs, broker_linkFindUniqueArgs, broker_linkFindUniqueOrThrowArgs, broker_linkFindFirstArgs, broker_linkFindFirstOrThrowArgs, broker_linkFindManyArgs, broker_linkCreateArgs, broker_linkCreateManyArgs, broker_linkDeleteArgs, broker_linkUpdateArgs, broker_linkDeleteManyArgs, broker_linkUpdateManyArgs, broker_linkUpsertArgs, Broker_linkAggregateArgs, AggregateBroker_link, broker_linkGroupByArgs, Broker_linkGroupByOutputType, broker_linkCountArgs, Broker_linkCountAggregateOutputType } from './broker_link';
import { $client_attributesPayload, client_attributesFieldRefs, client_attributesFindUniqueArgs, client_attributesFindUniqueOrThrowArgs, client_attributesFindFirstArgs, client_attributesFindFirstOrThrowArgs, client_attributesFindManyArgs, client_attributesCreateArgs, client_attributesCreateManyArgs, client_attributesDeleteArgs, client_attributesUpdateArgs, client_attributesDeleteManyArgs, client_attributesUpdateManyArgs, client_attributesUpsertArgs, Client_attributesAggregateArgs, AggregateClient_attributes, client_attributesGroupByArgs, Client_attributesGroupByOutputType, client_attributesCountArgs, Client_attributesCountAggregateOutputType } from './client_attributes';
import { $client_auth_flow_bindingsPayload, client_auth_flow_bindingsFieldRefs, client_auth_flow_bindingsFindUniqueArgs, client_auth_flow_bindingsFindUniqueOrThrowArgs, client_auth_flow_bindingsFindFirstArgs, client_auth_flow_bindingsFindFirstOrThrowArgs, client_auth_flow_bindingsFindManyArgs, client_auth_flow_bindingsCreateArgs, client_auth_flow_bindingsCreateManyArgs, client_auth_flow_bindingsDeleteArgs, client_auth_flow_bindingsUpdateArgs, client_auth_flow_bindingsDeleteManyArgs, client_auth_flow_bindingsUpdateManyArgs, client_auth_flow_bindingsUpsertArgs, Client_auth_flow_bindingsAggregateArgs, AggregateClient_auth_flow_bindings, client_auth_flow_bindingsGroupByArgs, Client_auth_flow_bindingsGroupByOutputType, client_auth_flow_bindingsCountArgs, Client_auth_flow_bindingsCountAggregateOutputType } from './client_auth_flow_bindings';
import { $client_default_rolesPayload, client_default_rolesFieldRefs, client_default_rolesFindUniqueArgs, client_default_rolesFindUniqueOrThrowArgs, client_default_rolesFindFirstArgs, client_default_rolesFindFirstOrThrowArgs, client_default_rolesFindManyArgs, client_default_rolesCreateArgs, client_default_rolesCreateManyArgs, client_default_rolesDeleteArgs, client_default_rolesUpdateArgs, client_default_rolesDeleteManyArgs, client_default_rolesUpdateManyArgs, client_default_rolesUpsertArgs, Client_default_rolesAggregateArgs, AggregateClient_default_roles, client_default_rolesGroupByArgs, Client_default_rolesGroupByOutputType, client_default_rolesCountArgs, Client_default_rolesCountAggregateOutputType } from './client_default_roles';
import { $client_initial_accessPayload, client_initial_accessFieldRefs, client_initial_accessFindUniqueArgs, client_initial_accessFindUniqueOrThrowArgs, client_initial_accessFindFirstArgs, client_initial_accessFindFirstOrThrowArgs, client_initial_accessFindManyArgs, client_initial_accessCreateArgs, client_initial_accessCreateManyArgs, client_initial_accessDeleteArgs, client_initial_accessUpdateArgs, client_initial_accessDeleteManyArgs, client_initial_accessUpdateManyArgs, client_initial_accessUpsertArgs, Client_initial_accessAggregateArgs, AggregateClient_initial_access, client_initial_accessGroupByArgs, Client_initial_accessGroupByOutputType, client_initial_accessCountArgs, Client_initial_accessCountAggregateOutputType } from './client_initial_access';
import { $client_node_registrationsPayload, client_node_registrationsFieldRefs, client_node_registrationsFindUniqueArgs, client_node_registrationsFindUniqueOrThrowArgs, client_node_registrationsFindFirstArgs, client_node_registrationsFindFirstOrThrowArgs, client_node_registrationsFindManyArgs, client_node_registrationsCreateArgs, client_node_registrationsCreateManyArgs, client_node_registrationsDeleteArgs, client_node_registrationsUpdateArgs, client_node_registrationsDeleteManyArgs, client_node_registrationsUpdateManyArgs, client_node_registrationsUpsertArgs, Client_node_registrationsAggregateArgs, AggregateClient_node_registrations, client_node_registrationsGroupByArgs, Client_node_registrationsGroupByOutputType, client_node_registrationsCountArgs, Client_node_registrationsCountAggregateOutputType } from './client_node_registrations';
import { $client_scopePayload, client_scopeFieldRefs, client_scopeFindUniqueArgs, client_scopeFindUniqueOrThrowArgs, client_scopeFindFirstArgs, client_scopeFindFirstOrThrowArgs, client_scopeFindManyArgs, client_scopeCreateArgs, client_scopeCreateManyArgs, client_scopeDeleteArgs, client_scopeUpdateArgs, client_scopeDeleteManyArgs, client_scopeUpdateManyArgs, client_scopeUpsertArgs, Client_scopeAggregateArgs, AggregateClient_scope, client_scopeGroupByArgs, Client_scopeGroupByOutputType, client_scopeCountArgs, Client_scopeCountAggregateOutputType } from './client_scope';
import { $client_scope_attributesPayload, client_scope_attributesFieldRefs, client_scope_attributesFindUniqueArgs, client_scope_attributesFindUniqueOrThrowArgs, client_scope_attributesFindFirstArgs, client_scope_attributesFindFirstOrThrowArgs, client_scope_attributesFindManyArgs, client_scope_attributesCreateArgs, client_scope_attributesCreateManyArgs, client_scope_attributesDeleteArgs, client_scope_attributesUpdateArgs, client_scope_attributesDeleteManyArgs, client_scope_attributesUpdateManyArgs, client_scope_attributesUpsertArgs, Client_scope_attributesAggregateArgs, AggregateClient_scope_attributes, client_scope_attributesGroupByArgs, Client_scope_attributesGroupByOutputType, client_scope_attributesCountArgs, Client_scope_attributesCountAggregateOutputType } from './client_scope_attributes';
import { $client_scope_clientPayload, client_scope_clientFieldRefs, client_scope_clientFindUniqueArgs, client_scope_clientFindUniqueOrThrowArgs, client_scope_clientFindFirstArgs, client_scope_clientFindFirstOrThrowArgs, client_scope_clientFindManyArgs, client_scope_clientCreateArgs, client_scope_clientCreateManyArgs, client_scope_clientDeleteArgs, client_scope_clientUpdateArgs, client_scope_clientDeleteManyArgs, client_scope_clientUpdateManyArgs, client_scope_clientUpsertArgs, Client_scope_clientAggregateArgs, AggregateClient_scope_client, client_scope_clientGroupByArgs, Client_scope_clientGroupByOutputType, client_scope_clientCountArgs, Client_scope_clientCountAggregateOutputType } from './client_scope_client';
import { $client_scope_role_mappingPayload, client_scope_role_mappingFieldRefs, client_scope_role_mappingFindUniqueArgs, client_scope_role_mappingFindUniqueOrThrowArgs, client_scope_role_mappingFindFirstArgs, client_scope_role_mappingFindFirstOrThrowArgs, client_scope_role_mappingFindManyArgs, client_scope_role_mappingCreateArgs, client_scope_role_mappingCreateManyArgs, client_scope_role_mappingDeleteArgs, client_scope_role_mappingUpdateArgs, client_scope_role_mappingDeleteManyArgs, client_scope_role_mappingUpdateManyArgs, client_scope_role_mappingUpsertArgs, Client_scope_role_mappingAggregateArgs, AggregateClient_scope_role_mapping, client_scope_role_mappingGroupByArgs, Client_scope_role_mappingGroupByOutputType, client_scope_role_mappingCountArgs, Client_scope_role_mappingCountAggregateOutputType } from './client_scope_role_mapping';
import { $client_session_auth_statusPayload, client_session_auth_statusFieldRefs, client_session_auth_statusFindUniqueArgs, client_session_auth_statusFindUniqueOrThrowArgs, client_session_auth_statusFindFirstArgs, client_session_auth_statusFindFirstOrThrowArgs, client_session_auth_statusFindManyArgs, client_session_auth_statusCreateArgs, client_session_auth_statusCreateManyArgs, client_session_auth_statusDeleteArgs, client_session_auth_statusUpdateArgs, client_session_auth_statusDeleteManyArgs, client_session_auth_statusUpdateManyArgs, client_session_auth_statusUpsertArgs, Client_session_auth_statusAggregateArgs, AggregateClient_session_auth_status, client_session_auth_statusGroupByArgs, Client_session_auth_statusGroupByOutputType, client_session_auth_statusCountArgs, Client_session_auth_statusCountAggregateOutputType } from './client_session_auth_status';
import { $client_session_notePayload, client_session_noteFieldRefs, client_session_noteFindUniqueArgs, client_session_noteFindUniqueOrThrowArgs, client_session_noteFindFirstArgs, client_session_noteFindFirstOrThrowArgs, client_session_noteFindManyArgs, client_session_noteCreateArgs, client_session_noteCreateManyArgs, client_session_noteDeleteArgs, client_session_noteUpdateArgs, client_session_noteDeleteManyArgs, client_session_noteUpdateManyArgs, client_session_noteUpsertArgs, Client_session_noteAggregateArgs, AggregateClient_session_note, client_session_noteGroupByArgs, Client_session_noteGroupByOutputType, client_session_noteCountArgs, Client_session_noteCountAggregateOutputType } from './client_session_note';
import { $clientPayload, clientFieldRefs, clientFindUniqueArgs, clientFindUniqueOrThrowArgs, clientFindFirstArgs, clientFindFirstOrThrowArgs, clientFindManyArgs, clientCreateArgs, clientCreateManyArgs, clientDeleteArgs, clientUpdateArgs, clientDeleteManyArgs, clientUpdateManyArgs, clientUpsertArgs, ClientAggregateArgs, AggregateClient, clientGroupByArgs, ClientGroupByOutputType, clientCountArgs, ClientCountAggregateOutputType } from './client';
import { $client_sessionPayload, client_sessionFieldRefs, client_sessionFindUniqueArgs, client_sessionFindUniqueOrThrowArgs, client_sessionFindFirstArgs, client_sessionFindFirstOrThrowArgs, client_sessionFindManyArgs, client_sessionCreateArgs, client_sessionCreateManyArgs, client_sessionDeleteArgs, client_sessionUpdateArgs, client_sessionDeleteManyArgs, client_sessionUpdateManyArgs, client_sessionUpsertArgs, Client_sessionAggregateArgs, AggregateClient_session, client_sessionGroupByArgs, Client_sessionGroupByOutputType, client_sessionCountArgs, Client_sessionCountAggregateOutputType } from './client_session';
import { $client_session_prot_mapperPayload, client_session_prot_mapperFieldRefs, client_session_prot_mapperFindUniqueArgs, client_session_prot_mapperFindUniqueOrThrowArgs, client_session_prot_mapperFindFirstArgs, client_session_prot_mapperFindFirstOrThrowArgs, client_session_prot_mapperFindManyArgs, client_session_prot_mapperCreateArgs, client_session_prot_mapperCreateManyArgs, client_session_prot_mapperDeleteArgs, client_session_prot_mapperUpdateArgs, client_session_prot_mapperDeleteManyArgs, client_session_prot_mapperUpdateManyArgs, client_session_prot_mapperUpsertArgs, Client_session_prot_mapperAggregateArgs, AggregateClient_session_prot_mapper, client_session_prot_mapperGroupByArgs, Client_session_prot_mapperGroupByOutputType, client_session_prot_mapperCountArgs, Client_session_prot_mapperCountAggregateOutputType } from './client_session_prot_mapper';
import { $client_session_rolePayload, client_session_roleFieldRefs, client_session_roleFindUniqueArgs, client_session_roleFindUniqueOrThrowArgs, client_session_roleFindFirstArgs, client_session_roleFindFirstOrThrowArgs, client_session_roleFindManyArgs, client_session_roleCreateArgs, client_session_roleCreateManyArgs, client_session_roleDeleteArgs, client_session_roleUpdateArgs, client_session_roleDeleteManyArgs, client_session_roleUpdateManyArgs, client_session_roleUpsertArgs, Client_session_roleAggregateArgs, AggregateClient_session_role, client_session_roleGroupByArgs, Client_session_roleGroupByOutputType, client_session_roleCountArgs, Client_session_roleCountAggregateOutputType } from './client_session_role';
import { $client_user_session_notePayload, client_user_session_noteFieldRefs, client_user_session_noteFindUniqueArgs, client_user_session_noteFindUniqueOrThrowArgs, client_user_session_noteFindFirstArgs, client_user_session_noteFindFirstOrThrowArgs, client_user_session_noteFindManyArgs, client_user_session_noteCreateArgs, client_user_session_noteCreateManyArgs, client_user_session_noteDeleteArgs, client_user_session_noteUpdateArgs, client_user_session_noteDeleteManyArgs, client_user_session_noteUpdateManyArgs, client_user_session_noteUpsertArgs, Client_user_session_noteAggregateArgs, AggregateClient_user_session_note, client_user_session_noteGroupByArgs, Client_user_session_noteGroupByOutputType, client_user_session_noteCountArgs, Client_user_session_noteCountAggregateOutputType } from './client_user_session_note';
import { $componentPayload, componentFieldRefs, componentFindUniqueArgs, componentFindUniqueOrThrowArgs, componentFindFirstArgs, componentFindFirstOrThrowArgs, componentFindManyArgs, componentCreateArgs, componentCreateManyArgs, componentDeleteArgs, componentUpdateArgs, componentDeleteManyArgs, componentUpdateManyArgs, componentUpsertArgs, ComponentAggregateArgs, AggregateComponent, componentGroupByArgs, ComponentGroupByOutputType, componentCountArgs, ComponentCountAggregateOutputType } from './component';
import { $component_configPayload, component_configFieldRefs, component_configFindUniqueArgs, component_configFindUniqueOrThrowArgs, component_configFindFirstArgs, component_configFindFirstOrThrowArgs, component_configFindManyArgs, component_configCreateArgs, component_configCreateManyArgs, component_configDeleteArgs, component_configUpdateArgs, component_configDeleteManyArgs, component_configUpdateManyArgs, component_configUpsertArgs, Component_configAggregateArgs, AggregateComponent_config, component_configGroupByArgs, Component_configGroupByOutputType, component_configCountArgs, Component_configCountAggregateOutputType } from './component_config';
import { $composite_rolePayload, composite_roleFieldRefs, composite_roleFindUniqueArgs, composite_roleFindUniqueOrThrowArgs, composite_roleFindFirstArgs, composite_roleFindFirstOrThrowArgs, composite_roleFindManyArgs, composite_roleCreateArgs, composite_roleCreateManyArgs, composite_roleDeleteArgs, composite_roleUpdateArgs, composite_roleDeleteManyArgs, composite_roleUpdateManyArgs, composite_roleUpsertArgs, Composite_roleAggregateArgs, AggregateComposite_role, composite_roleGroupByArgs, Composite_roleGroupByOutputType, composite_roleCountArgs, Composite_roleCountAggregateOutputType } from './composite_role';
import { $credentialPayload, credentialFieldRefs, credentialFindUniqueArgs, credentialFindUniqueOrThrowArgs, credentialFindFirstArgs, credentialFindFirstOrThrowArgs, credentialFindManyArgs, credentialCreateArgs, credentialCreateManyArgs, credentialDeleteArgs, credentialUpdateArgs, credentialDeleteManyArgs, credentialUpdateManyArgs, credentialUpsertArgs, CredentialAggregateArgs, AggregateCredential, credentialGroupByArgs, CredentialGroupByOutputType, credentialCountArgs, CredentialCountAggregateOutputType } from './credential';
import { $CookiePayload, CookieFieldRefs, CookieFindUniqueArgs, CookieFindUniqueOrThrowArgs, CookieFindFirstArgs, CookieFindFirstOrThrowArgs, CookieFindManyArgs, CookieCreateArgs, CookieCreateManyArgs, CookieDeleteArgs, CookieUpdateArgs, CookieDeleteManyArgs, CookieUpdateManyArgs, CookieUpsertArgs, CookieAggregateArgs, AggregateCookie, CookieGroupByArgs, CookieGroupByOutputType, CookieCountArgs, CookieCountAggregateOutputType } from './Cookie';


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Ab_email_domains
 * const ab_email_domains = await prisma.ab_email_domain.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends PrismaClientOptions = PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<LogLevel | LogDefinition> ? GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Ab_email_domains
   * const ab_email_domains = await prisma.ab_email_domain.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Subset<T, PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? QueryEvent : LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', TypeMapCb, ExtArgs>

      /**
   * `prisma.ab_email_domain`: Exposes CRUD operations for the **ab_email_domain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ab_email_domains
    * const ab_email_domains = await prisma.ab_email_domain.findMany()
    * ```
    */
  get ab_email_domain(): ab_email_domainDelegate<ExtArgs>;
  /**
   * `prisma.admin_event_entity`: Exposes CRUD operations for the **admin_event_entity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admin_event_entities
    * const admin_event_entities = await prisma.admin_event_entity.findMany()
    * ```
    */
  get admin_event_entity(): admin_event_entityDelegate<ExtArgs>;

  /**
   * `prisma.associated_policy`: Exposes CRUD operations for the **associated_policy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Associated_policies
    * const associated_policies = await prisma.associated_policy.findMany()
    * ```
    */
  // get associated_policy(): associated_policyDelegate<ExtArgs>;

  // /**
  //  * `prisma.authentication_execution`: Exposes CRUD operations for the **authentication_execution** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Authentication_executions
  //   * const authentication_executions = await prisma.authentication_execution.findMany()
  //   * ```
  //   */
  // get authentication_execution(): authentication_executionDelegate<ExtArgs>;

  // /**
  //  * `prisma.authentication_flow`: Exposes CRUD operations for the **authentication_flow** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Authentication_flows
  //   * const authentication_flows = await prisma.authentication_flow.findMany()
  //   * ```
  //   */
  // get authentication_flow(): authentication_flowDelegate<ExtArgs>;

  // /**
  //  * `prisma.authenticator_config`: Exposes CRUD operations for the **authenticator_config** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Authenticator_configs
  //   * const authenticator_configs = await prisma.authenticator_config.findMany()
  //   * ```
  //   */
  // get authenticator_config(): authenticator_configDelegate<ExtArgs>;

  // /**
  //  * `prisma.authenticator_config_entry`: Exposes CRUD operations for the **authenticator_config_entry** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Authenticator_config_entries
  //   * const authenticator_config_entries = await prisma.authenticator_config_entry.findMany()
  //   * ```
  //   */
  // get authenticator_config_entry(): authenticator_config_entryDelegate<ExtArgs>;

  // /**
  //  * `prisma.broker_link`: Exposes CRUD operations for the **broker_link** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Broker_links
  //   * const broker_links = await prisma.broker_link.findMany()
  //   * ```
  //   */
  // get broker_link(): broker_linkDelegate<ExtArgs>;

  // /**
  //  * `prisma.client`: Exposes CRUD operations for the **client** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Clients
  //   * const clients = await prisma.client.findMany()
  //   * ```
  //   */
  // get client(): clientDelegate<ExtArgs>;

  // /**
  //  * `prisma.client_attributes`: Exposes CRUD operations for the **client_attributes** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Client_attributes
  //   * const client_attributes = await prisma.client_attributes.findMany()
  //   * ```
  //   */
  // get client_attributes(): client_attributesDelegate<ExtArgs>;

  // /**
  //  * `prisma.client_auth_flow_bindings`: Exposes CRUD operations for the **client_auth_flow_bindings** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Client_auth_flow_bindings
  //   * const client_auth_flow_bindings = await prisma.client_auth_flow_bindings.findMany()
  //   * ```
  //   */
  // get client_auth_flow_bindings(): client_auth_flow_bindingsDelegate<ExtArgs>;

  // /**
  //  * `prisma.client_default_roles`: Exposes CRUD operations for the **client_default_roles** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Client_default_roles
  //   * const client_default_roles = await prisma.client_default_roles.findMany()
  //   * ```
  //   */
  // get client_default_roles(): client_default_rolesDelegate<ExtArgs>;

  // /**
  //  * `prisma.client_initial_access`: Exposes CRUD operations for the **client_initial_access** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Client_initial_accesses
  //   * const client_initial_accesses = await prisma.client_initial_access.findMany()
  //   * ```
  //   */
  // get client_initial_access(): client_initial_accessDelegate<ExtArgs>;

  // /**
  //  * `prisma.client_node_registrations`: Exposes CRUD operations for the **client_node_registrations** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Client_node_registrations
  //   * const client_node_registrations = await prisma.client_node_registrations.findMany()
  //   * ```
  //   */
  // get client_node_registrations(): client_node_registrationsDelegate<ExtArgs>;

  // /**
  //  * `prisma.client_scope`: Exposes CRUD operations for the **client_scope** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Client_scopes
  //   * const client_scopes = await prisma.client_scope.findMany()
  //   * ```
  //   */
  // get client_scope(): client_scopeDelegate<ExtArgs>;

  // /**
  //  * `prisma.client_scope_attributes`: Exposes CRUD operations for the **client_scope_attributes** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Client_scope_attributes
  //   * const client_scope_attributes = await prisma.client_scope_attributes.findMany()
  //   * ```
  //   */
  // get client_scope_attributes(): client_scope_attributesDelegate<ExtArgs>;

  // /**
  //  * `prisma.client_scope_client`: Exposes CRUD operations for the **client_scope_client** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Client_scope_clients
  //   * const client_scope_clients = await prisma.client_scope_client.findMany()
  //   * ```
  //   */
  // get client_scope_client(): client_scope_clientDelegate<ExtArgs>;

  // /**
  //  * `prisma.client_scope_role_mapping`: Exposes CRUD operations for the **client_scope_role_mapping** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Client_scope_role_mappings
  //   * const client_scope_role_mappings = await prisma.client_scope_role_mapping.findMany()
  //   * ```
  //   */
  // get client_scope_role_mapping(): client_scope_role_mappingDelegate<ExtArgs>;

  // /**
  //  * `prisma.client_session`: Exposes CRUD operations for the **client_session** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Client_sessions
  //   * const client_sessions = await prisma.client_session.findMany()
  //   * ```
  //   */
  // get client_session(): client_sessionDelegate<ExtArgs>;

  // /**
  //  * `prisma.client_session_auth_status`: Exposes CRUD operations for the **client_session_auth_status** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Client_session_auth_statuses
  //   * const client_session_auth_statuses = await prisma.client_session_auth_status.findMany()
  //   * ```
  //   */
  // get client_session_auth_status(): client_session_auth_statusDelegate<ExtArgs>;

  // /**
  //  * `prisma.client_session_note`: Exposes CRUD operations for the **client_session_note** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Client_session_notes
  //   * const client_session_notes = await prisma.client_session_note.findMany()
  //   * ```
  //   */
  // get client_session_note(): client_session_noteDelegate<ExtArgs>;

  // /**
  //  * `prisma.client_session_prot_mapper`: Exposes CRUD operations for the **client_session_prot_mapper** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Client_session_prot_mappers
  //   * const client_session_prot_mappers = await prisma.client_session_prot_mapper.findMany()
  //   * ```
  //   */
  // get client_session_prot_mapper(): client_session_prot_mapperDelegate<ExtArgs>;

  // /**
  //  * `prisma.client_session_role`: Exposes CRUD operations for the **client_session_role** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Client_session_roles
  //   * const client_session_roles = await prisma.client_session_role.findMany()
  //   * ```
  //   */
  // get client_session_role(): client_session_roleDelegate<ExtArgs>;

  // /**
  //  * `prisma.client_user_session_note`: Exposes CRUD operations for the **client_user_session_note** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Client_user_session_notes
  //   * const client_user_session_notes = await prisma.client_user_session_note.findMany()
  //   * ```
  //   */
  // get client_user_session_note(): client_user_session_noteDelegate<ExtArgs>;

  // /**
  //  * `prisma.component`: Exposes CRUD operations for the **component** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Components
  //   * const components = await prisma.component.findMany()
  //   * ```
  //   */
  // get component(): componentDelegate<ExtArgs>;

  // /**
  //  * `prisma.component_config`: Exposes CRUD operations for the **component_config** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Component_configs
  //   * const component_configs = await prisma.component_config.findMany()
  //   * ```
  //   */
  // get component_config(): component_configDelegate<ExtArgs>;

  // /**
  //  * `prisma.composite_role`: Exposes CRUD operations for the **composite_role** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Composite_roles
  //   * const composite_roles = await prisma.composite_role.findMany()
  //   * ```
  //   */
  // get composite_role(): composite_roleDelegate<ExtArgs>;

  // /**
  //  * `prisma.credential`: Exposes CRUD operations for the **credential** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Credentials
  //   * const credentials = await prisma.credential.findMany()
  //   * ```
  //   */
  // get credential(): credentialDelegate<ExtArgs>;

  // /**
  //  * `prisma.databasechangeloglock`: Exposes CRUD operations for the **databasechangeloglock** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Databasechangeloglocks
  //   * const databasechangeloglocks = await prisma.databasechangeloglock.findMany()
  //   * ```
  //   */
  // get databasechangeloglock(): databasechangeloglockDelegate<ExtArgs>;

  // /**
  //  * `prisma.default_client_scope`: Exposes CRUD operations for the **default_client_scope** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Default_client_scopes
  //   * const default_client_scopes = await prisma.default_client_scope.findMany()
  //   * ```
  //   */
  // get default_client_scope(): default_client_scopeDelegate<ExtArgs>;

  // /**
  //  * `prisma.event_entity`: Exposes CRUD operations for the **event_entity** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Event_entities
  //   * const event_entities = await prisma.event_entity.findMany()
  //   * ```
  //   */
  // get event_entity(): event_entityDelegate<ExtArgs>;

  // /**
  //  * `prisma.fed_user_attribute`: Exposes CRUD operations for the **fed_user_attribute** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Fed_user_attributes
  //   * const fed_user_attributes = await prisma.fed_user_attribute.findMany()
  //   * ```
  //   */
  // get fed_user_attribute(): fed_user_attributeDelegate<ExtArgs>;

  // /**
  //  * `prisma.fed_user_consent`: Exposes CRUD operations for the **fed_user_consent** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Fed_user_consents
  //   * const fed_user_consents = await prisma.fed_user_consent.findMany()
  //   * ```
  //   */
  // get fed_user_consent(): fed_user_consentDelegate<ExtArgs>;

  // /**
  //  * `prisma.fed_user_consent_cl_scope`: Exposes CRUD operations for the **fed_user_consent_cl_scope** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Fed_user_consent_cl_scopes
  //   * const fed_user_consent_cl_scopes = await prisma.fed_user_consent_cl_scope.findMany()
  //   * ```
  //   */
  // get fed_user_consent_cl_scope(): fed_user_consent_cl_scopeDelegate<ExtArgs>;

  // /**
  //  * `prisma.fed_user_credential`: Exposes CRUD operations for the **fed_user_credential** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Fed_user_credentials
  //   * const fed_user_credentials = await prisma.fed_user_credential.findMany()
  //   * ```
  //   */
  // get fed_user_credential(): fed_user_credentialDelegate<ExtArgs>;

  // /**
  //  * `prisma.fed_user_group_membership`: Exposes CRUD operations for the **fed_user_group_membership** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Fed_user_group_memberships
  //   * const fed_user_group_memberships = await prisma.fed_user_group_membership.findMany()
  //   * ```
  //   */
  // get fed_user_group_membership(): fed_user_group_membershipDelegate<ExtArgs>;

  // /**
  //  * `prisma.fed_user_required_action`: Exposes CRUD operations for the **fed_user_required_action** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Fed_user_required_actions
  //   * const fed_user_required_actions = await prisma.fed_user_required_action.findMany()
  //   * ```
  //   */
  // get fed_user_required_action(): fed_user_required_actionDelegate<ExtArgs>;

  // /**
  //  * `prisma.fed_user_role_mapping`: Exposes CRUD operations for the **fed_user_role_mapping** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Fed_user_role_mappings
  //   * const fed_user_role_mappings = await prisma.fed_user_role_mapping.findMany()
  //   * ```
  //   */
  // get fed_user_role_mapping(): fed_user_role_mappingDelegate<ExtArgs>;

  // /**
  //  * `prisma.federated_identity`: Exposes CRUD operations for the **federated_identity** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Federated_identities
  //   * const federated_identities = await prisma.federated_identity.findMany()
  //   * ```
  //   */
  // get federated_identity(): federated_identityDelegate<ExtArgs>;

  // /**
  //  * `prisma.federated_user`: Exposes CRUD operations for the **federated_user** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Federated_users
  //   * const federated_users = await prisma.federated_user.findMany()
  //   * ```
  //   */
  // get federated_user(): federated_userDelegate<ExtArgs>;

  // /**
  //  * `prisma.group_attribute`: Exposes CRUD operations for the **group_attribute** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Group_attributes
  //   * const group_attributes = await prisma.group_attribute.findMany()
  //   * ```
  //   */
  // get group_attribute(): group_attributeDelegate<ExtArgs>;

  // /**
  //  * `prisma.group_role_mapping`: Exposes CRUD operations for the **group_role_mapping** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Group_role_mappings
  //   * const group_role_mappings = await prisma.group_role_mapping.findMany()
  //   * ```
  //   */
  // get group_role_mapping(): group_role_mappingDelegate<ExtArgs>;

  // /**
  //  * `prisma.identity_provider`: Exposes CRUD operations for the **identity_provider** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Identity_providers
  //   * const identity_providers = await prisma.identity_provider.findMany()
  //   * ```
  //   */
  // get identity_provider(): identity_providerDelegate<ExtArgs>;

  // /**
  //  * `prisma.identity_provider_config`: Exposes CRUD operations for the **identity_provider_config** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Identity_provider_configs
  //   * const identity_provider_configs = await prisma.identity_provider_config.findMany()
  //   * ```
  //   */
  // get identity_provider_config(): identity_provider_configDelegate<ExtArgs>;

  // /**
  //  * `prisma.identity_provider_mapper`: Exposes CRUD operations for the **identity_provider_mapper** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Identity_provider_mappers
  //   * const identity_provider_mappers = await prisma.identity_provider_mapper.findMany()
  //   * ```
  //   */
  // get identity_provider_mapper(): identity_provider_mapperDelegate<ExtArgs>;

  // /**
  //  * `prisma.idp_mapper_config`: Exposes CRUD operations for the **idp_mapper_config** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Idp_mapper_configs
  //   * const idp_mapper_configs = await prisma.idp_mapper_config.findMany()
  //   * ```
  //   */
  // get idp_mapper_config(): idp_mapper_configDelegate<ExtArgs>;

  // /**
  //  * `prisma.keycloak_group`: Exposes CRUD operations for the **keycloak_group** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Keycloak_groups
  //   * const keycloak_groups = await prisma.keycloak_group.findMany()
  //   * ```
  //   */
  // get keycloak_group(): keycloak_groupDelegate<ExtArgs>;

  // /**
  //  * `prisma.keycloak_role`: Exposes CRUD operations for the **keycloak_role** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Keycloak_roles
  //   * const keycloak_roles = await prisma.keycloak_role.findMany()
  //   * ```
  //   */
  // get keycloak_role(): keycloak_roleDelegate<ExtArgs>;

  // /**
  //  * `prisma.migration_model`: Exposes CRUD operations for the **migration_model** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Migration_models
  //   * const migration_models = await prisma.migration_model.findMany()
  //   * ```
  //   */
  // get migration_model(): migration_modelDelegate<ExtArgs>;

  // /**
  //  * `prisma.offline_client_session`: Exposes CRUD operations for the **offline_client_session** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Offline_client_sessions
  //   * const offline_client_sessions = await prisma.offline_client_session.findMany()
  //   * ```
  //   */
  // get offline_client_session(): offline_client_sessionDelegate<ExtArgs>;

  // /**
  //  * `prisma.offline_user_session`: Exposes CRUD operations for the **offline_user_session** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Offline_user_sessions
  //   * const offline_user_sessions = await prisma.offline_user_session.findMany()
  //   * ```
  //   */
  // get offline_user_session(): offline_user_sessionDelegate<ExtArgs>;

  // /**
  //  * `prisma.policy_config`: Exposes CRUD operations for the **policy_config** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Policy_configs
  //   * const policy_configs = await prisma.policy_config.findMany()
  //   * ```
  //   */
  // get policy_config(): policy_configDelegate<ExtArgs>;

  // /**
  //  * `prisma.protocol_mapper`: Exposes CRUD operations for the **protocol_mapper** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Protocol_mappers
  //   * const protocol_mappers = await prisma.protocol_mapper.findMany()
  //   * ```
  //   */
  // get protocol_mapper(): protocol_mapperDelegate<ExtArgs>;

  // /**
  //  * `prisma.protocol_mapper_config`: Exposes CRUD operations for the **protocol_mapper_config** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Protocol_mapper_configs
  //   * const protocol_mapper_configs = await prisma.protocol_mapper_config.findMany()
  //   * ```
  //   */
  // get protocol_mapper_config(): protocol_mapper_configDelegate<ExtArgs>;

  // /**
  //  * `prisma.realm`: Exposes CRUD operations for the **realm** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Realms
  //   * const realms = await prisma.realm.findMany()
  //   * ```
  //   */
  // get realm(): realmDelegate<ExtArgs>;

  // /**
  //  * `prisma.realm_attribute`: Exposes CRUD operations for the **realm_attribute** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Realm_attributes
  //   * const realm_attributes = await prisma.realm_attribute.findMany()
  //   * ```
  //   */
  // get realm_attribute(): realm_attributeDelegate<ExtArgs>;

  // /**
  //  * `prisma.realm_default_groups`: Exposes CRUD operations for the **realm_default_groups** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Realm_default_groups
  //   * const realm_default_groups = await prisma.realm_default_groups.findMany()
  //   * ```
  //   */
  // get realm_default_groups(): realm_default_groupsDelegate<ExtArgs>;

  // /**
  //  * `prisma.realm_default_roles`: Exposes CRUD operations for the **realm_default_roles** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Realm_default_roles
  //   * const realm_default_roles = await prisma.realm_default_roles.findMany()
  //   * ```
  //   */
  // get realm_default_roles(): realm_default_rolesDelegate<ExtArgs>;

  // /**
  //  * `prisma.realm_enabled_event_types`: Exposes CRUD operations for the **realm_enabled_event_types** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Realm_enabled_event_types
  //   * const realm_enabled_event_types = await prisma.realm_enabled_event_types.findMany()
  //   * ```
  //   */
  // get realm_enabled_event_types(): realm_enabled_event_typesDelegate<ExtArgs>;

  // /**
  //  * `prisma.realm_events_listeners`: Exposes CRUD operations for the **realm_events_listeners** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Realm_events_listeners
  //   * const realm_events_listeners = await prisma.realm_events_listeners.findMany()
  //   * ```
  //   */
  // get realm_events_listeners(): realm_events_listenersDelegate<ExtArgs>;

  // /**
  //  * `prisma.realm_localizations`: Exposes CRUD operations for the **realm_localizations** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Realm_localizations
  //   * const realm_localizations = await prisma.realm_localizations.findMany()
  //   * ```
  //   */
  // get realm_localizations(): realm_localizationsDelegate<ExtArgs>;

  // /**
  //  * `prisma.realm_required_credential`: Exposes CRUD operations for the **realm_required_credential** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Realm_required_credentials
  //   * const realm_required_credentials = await prisma.realm_required_credential.findMany()
  //   * ```
  //   */
  // get realm_required_credential(): realm_required_credentialDelegate<ExtArgs>;

  // /**
  //  * `prisma.realm_smtp_config`: Exposes CRUD operations for the **realm_smtp_config** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Realm_smtp_configs
  //   * const realm_smtp_configs = await prisma.realm_smtp_config.findMany()
  //   * ```
  //   */
  // get realm_smtp_config(): realm_smtp_configDelegate<ExtArgs>;

  // /**
  //  * `prisma.realm_supported_locales`: Exposes CRUD operations for the **realm_supported_locales** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Realm_supported_locales
  //   * const realm_supported_locales = await prisma.realm_supported_locales.findMany()
  //   * ```
  //   */
  // get realm_supported_locales(): realm_supported_localesDelegate<ExtArgs>;

  // /**
  //  * `prisma.redirect_uris`: Exposes CRUD operations for the **redirect_uris** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Redirect_urises
  //   * const redirect_urises = await prisma.redirect_uris.findMany()
  //   * ```
  //   */
  // get redirect_uris(): redirect_urisDelegate<ExtArgs>;

  // /**
  //  * `prisma.required_action_config`: Exposes CRUD operations for the **required_action_config** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Required_action_configs
  //   * const required_action_configs = await prisma.required_action_config.findMany()
  //   * ```
  //   */
  // get required_action_config(): required_action_configDelegate<ExtArgs>;

  // /**
  //  * `prisma.required_action_provider`: Exposes CRUD operations for the **required_action_provider** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Required_action_providers
  //   * const required_action_providers = await prisma.required_action_provider.findMany()
  //   * ```
  //   */
  // get required_action_provider(): required_action_providerDelegate<ExtArgs>;

  // /**
  //  * `prisma.resource_attribute`: Exposes CRUD operations for the **resource_attribute** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Resource_attributes
  //   * const resource_attributes = await prisma.resource_attribute.findMany()
  //   * ```
  //   */
  // get resource_attribute(): resource_attributeDelegate<ExtArgs>;

  // /**
  //  * `prisma.resource_policy`: Exposes CRUD operations for the **resource_policy** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Resource_policies
  //   * const resource_policies = await prisma.resource_policy.findMany()
  //   * ```
  //   */
  // get resource_policy(): resource_policyDelegate<ExtArgs>;

  // /**
  //  * `prisma.resource_scope`: Exposes CRUD operations for the **resource_scope** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Resource_scopes
  //   * const resource_scopes = await prisma.resource_scope.findMany()
  //   * ```
  //   */
  // get resource_scope(): resource_scopeDelegate<ExtArgs>;

  // /**
  //  * `prisma.resource_server`: Exposes CRUD operations for the **resource_server** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Resource_servers
  //   * const resource_servers = await prisma.resource_server.findMany()
  //   * ```
  //   */
  // get resource_server(): resource_serverDelegate<ExtArgs>;

  // /**
  //  * `prisma.resource_server_perm_ticket`: Exposes CRUD operations for the **resource_server_perm_ticket** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Resource_server_perm_tickets
  //   * const resource_server_perm_tickets = await prisma.resource_server_perm_ticket.findMany()
  //   * ```
  //   */
  // get resource_server_perm_ticket(): resource_server_perm_ticketDelegate<ExtArgs>;

  // /**
  //  * `prisma.resource_server_policy`: Exposes CRUD operations for the **resource_server_policy** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Resource_server_policies
  //   * const resource_server_policies = await prisma.resource_server_policy.findMany()
  //   * ```
  //   */
  // get resource_server_policy(): resource_server_policyDelegate<ExtArgs>;

  // /**
  //  * `prisma.resource_server_resource`: Exposes CRUD operations for the **resource_server_resource** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Resource_server_resources
  //   * const resource_server_resources = await prisma.resource_server_resource.findMany()
  //   * ```
  //   */
  // get resource_server_resource(): resource_server_resourceDelegate<ExtArgs>;

  // /**
  //  * `prisma.resource_server_scope`: Exposes CRUD operations for the **resource_server_scope** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Resource_server_scopes
  //   * const resource_server_scopes = await prisma.resource_server_scope.findMany()
  //   * ```
  //   */
  // get resource_server_scope(): resource_server_scopeDelegate<ExtArgs>;

  // /**
  //  * `prisma.resource_uris`: Exposes CRUD operations for the **resource_uris** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Resource_urises
  //   * const resource_urises = await prisma.resource_uris.findMany()
  //   * ```
  //   */
  // get resource_uris(): resource_urisDelegate<ExtArgs>;

  // /**
  //  * `prisma.role_attribute`: Exposes CRUD operations for the **role_attribute** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Role_attributes
  //   * const role_attributes = await prisma.role_attribute.findMany()
  //   * ```
  //   */
  // get role_attribute(): role_attributeDelegate<ExtArgs>;

  // /**
  //  * `prisma.scope_mapping`: Exposes CRUD operations for the **scope_mapping** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Scope_mappings
  //   * const scope_mappings = await prisma.scope_mapping.findMany()
  //   * ```
  //   */
  // get scope_mapping(): scope_mappingDelegate<ExtArgs>;

  // /**
  //  * `prisma.scope_policy`: Exposes CRUD operations for the **scope_policy** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Scope_policies
  //   * const scope_policies = await prisma.scope_policy.findMany()
  //   * ```
  //   */
  // get scope_policy(): scope_policyDelegate<ExtArgs>;

  // /**
  //  * `prisma.user_attribute`: Exposes CRUD operations for the **user_attribute** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more User_attributes
  //   * const user_attributes = await prisma.user_attribute.findMany()
  //   * ```
  //   */
  // get user_attribute(): user_attributeDelegate<ExtArgs>;

  // /**
  //  * `prisma.user_consent`: Exposes CRUD operations for the **user_consent** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more User_consents
  //   * const user_consents = await prisma.user_consent.findMany()
  //   * ```
  //   */
  // get user_consent(): user_consentDelegate<ExtArgs>;

  // /**
  //  * `prisma.user_consent_client_scope`: Exposes CRUD operations for the **user_consent_client_scope** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more User_consent_client_scopes
  //   * const user_consent_client_scopes = await prisma.user_consent_client_scope.findMany()
  //   * ```
  //   */
  // get user_consent_client_scope(): user_consent_client_scopeDelegate<ExtArgs>;

  // /**
  //  * `prisma.user_entity`: Exposes CRUD operations for the **user_entity** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more User_entities
  //   * const user_entities = await prisma.user_entity.findMany()
  //   * ```
  //   */
  // get user_entity(): user_entityDelegate<ExtArgs>;

  // /**
  //  * `prisma.user_federation_config`: Exposes CRUD operations for the **user_federation_config** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more User_federation_configs
  //   * const user_federation_configs = await prisma.user_federation_config.findMany()
  //   * ```
  //   */
  // get user_federation_config(): user_federation_configDelegate<ExtArgs>;

  // /**
  //  * `prisma.user_federation_mapper`: Exposes CRUD operations for the **user_federation_mapper** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more User_federation_mappers
  //   * const user_federation_mappers = await prisma.user_federation_mapper.findMany()
  //   * ```
  //   */
  // get user_federation_mapper(): user_federation_mapperDelegate<ExtArgs>;

  // /**
  //  * `prisma.user_federation_mapper_config`: Exposes CRUD operations for the **user_federation_mapper_config** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more User_federation_mapper_configs
  //   * const user_federation_mapper_configs = await prisma.user_federation_mapper_config.findMany()
  //   * ```
  //   */
  // get user_federation_mapper_config(): user_federation_mapper_configDelegate<ExtArgs>;

  // /**
  //  * `prisma.user_federation_provider`: Exposes CRUD operations for the **user_federation_provider** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more User_federation_providers
  //   * const user_federation_providers = await prisma.user_federation_provider.findMany()
  //   * ```
  //   */
  // get user_federation_provider(): user_federation_providerDelegate<ExtArgs>;

  // /**
  //  * `prisma.user_group_membership`: Exposes CRUD operations for the **user_group_membership** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more User_group_memberships
  //   * const user_group_memberships = await prisma.user_group_membership.findMany()
  //   * ```
  //   */
  // get user_group_membership(): user_group_membershipDelegate<ExtArgs>;

  // /**
  //  * `prisma.user_required_action`: Exposes CRUD operations for the **user_required_action** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more User_required_actions
  //   * const user_required_actions = await prisma.user_required_action.findMany()
  //   * ```
  //   */
  // get user_required_action(): user_required_actionDelegate<ExtArgs>;

  // /**
  //  * `prisma.user_role_mapping`: Exposes CRUD operations for the **user_role_mapping** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more User_role_mappings
  //   * const user_role_mappings = await prisma.user_role_mapping.findMany()
  //   * ```
  //   */
  // get user_role_mapping(): user_role_mappingDelegate<ExtArgs>;

  // /**
  //  * `prisma.user_session`: Exposes CRUD operations for the **user_session** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more User_sessions
  //   * const user_sessions = await prisma.user_session.findMany()
  //   * ```
  //   */
  // get user_session(): user_sessionDelegate<ExtArgs>;

  // /**
  //  * `prisma.user_session_note`: Exposes CRUD operations for the **user_session_note** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more User_session_notes
  //   * const user_session_notes = await prisma.user_session_note.findMany()
  //   * ```
  //   */
  // get user_session_note(): user_session_noteDelegate<ExtArgs>;

  // /**
  //  * `prisma.username_login_failure`: Exposes CRUD operations for the **username_login_failure** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Username_login_failures
  //   * const username_login_failures = await prisma.username_login_failure.findMany()
  //   * ```
  //   */
  // get username_login_failure(): username_login_failureDelegate<ExtArgs>;

  // /**
  //  * `prisma.web_origins`: Exposes CRUD operations for the **web_origins** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Web_origins
  //   * const web_origins = await prisma.web_origins.findMany()
  //   * ```
  //   */
  // get web_origins(): web_originsDelegate<ExtArgs>;

  // /**
  //  * `prisma.ab_camp_user`: Exposes CRUD operations for the **ab_camp_user** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Ab_camp_users
  //   * const ab_camp_users = await prisma.ab_camp_user.findMany()
  //   * ```
  //   */
  // get ab_camp_user(): ab_camp_userDelegate<ExtArgs>;

  // /**
  //  * `prisma.ab_training_env`: Exposes CRUD operations for the **ab_training_env** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Ab_training_envs
  //   * const ab_training_envs = await prisma.ab_training_env.findMany()
  //   * ```
  //   */
  // get ab_training_env(): ab_training_envDelegate<ExtArgs>;

  // /**
  //  * `prisma.knex_migrations`: Exposes CRUD operations for the **knex_migrations** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Knex_migrations
  //   * const knex_migrations = await prisma.knex_migrations.findMany()
  //   * ```
  //   */
  // get knex_migrations(): knex_migrationsDelegate<ExtArgs>;

  // /**
  //  * `prisma.knex_migrations_lock`: Exposes CRUD operations for the **knex_migrations_lock** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Knex_migrations_locks
  //   * const knex_migrations_locks = await prisma.knex_migrations_lock.findMany()
  //   * ```
  //   */
  // get knex_migrations_lock(): knex_migrations_lockDelegate<ExtArgs>;

  // /**
  //  * `prisma.ab_camp_audit`: Exposes CRUD operations for the **ab_camp_audit** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Ab_camp_audits
  //   * const ab_camp_audits = await prisma.ab_camp_audit.findMany()
  //   * ```
  //   */
  // get ab_camp_audit(): ab_camp_auditDelegate<ExtArgs>;

  // /**
  //  * `prisma.user`: Exposes CRUD operations for the **User** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Users
  //   * const users = await prisma.user.findMany()
  //   * ```
  //   */
  // get user(): UserDelegate<ExtArgs>;

  // /**
  //  * `prisma.cookie`: Exposes CRUD operations for the **Cookie** model.
  //   * Example usage:
  //   * ```ts
  //   * // Fetch zero or more Cookies
  //   * const cookies = await prisma.cookie.findMany()
  //   * ```
  //   */
  // get cookie(): CookieDelegate<ExtArgs>;
}


  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact


  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `JsonNull` to store the JSON null value or
   * `DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export namespace NullTypes {
    /**
    * Type of `DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `DbNull` or `JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ab_email_domain: 'ab_email_domain'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'ab_email_domain'
      txIsolationLevel: TransactionIsolationLevel
    },
    model: {
      ab_email_domain: {
        payload: $ab_email_domainPayload<ExtArgs>
        fields: ab_email_domainFieldRefs
        operations: {
          findUnique: {
            args: ab_email_domainFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_email_domainPayload> | null
          }
          findUniqueOrThrow: {
            args: ab_email_domainFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_email_domainPayload>
          }
          findFirst: {
            args: ab_email_domainFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_email_domainPayload> | null
          }
          findFirstOrThrow: {
            args: ab_email_domainFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_email_domainPayload>
          }
          findMany: {
            args: ab_email_domainFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_email_domainPayload>[]
          }
          create: {
            args: ab_email_domainCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_email_domainPayload>
          }
          createMany: {
            args: ab_email_domainCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: ab_email_domainDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_email_domainPayload>
          }
          update: {
            args: ab_email_domainUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_email_domainPayload>
          }
          deleteMany: {
            args: ab_email_domainDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: ab_email_domainUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: ab_email_domainUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_email_domainPayload>
          }
          aggregate: {
            args: Ab_email_domainAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAb_email_domain>
          }
          groupBy: {
            args: ab_email_domainGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Ab_email_domainGroupByOutputType>[]
          }
          count: {
            args: ab_email_domainCountArgs<ExtArgs>,
            result: $Utils.Optional<Ab_email_domainCountAggregateOutputType> | number
          }
        }
      }
      ab_camp_user: {
        payload: $ab_camp_userPayload<ExtArgs>
        fields: ab_camp_userFieldRefs
        operations: {
          findUnique: {
            args: ab_camp_userFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_camp_userPayload> | null
          }
          findUniqueOrThrow: {
            args: ab_camp_userFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_camp_userPayload>
          }
          findFirst: {
            args: ab_camp_userFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_camp_userPayload> | null
          }
          findFirstOrThrow: {
            args: ab_camp_userFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_camp_userPayload>
          }
          findMany: {
            args: ab_camp_userFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_camp_userPayload>[]
          }
          create: {
            args: ab_camp_userCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_camp_userPayload>
          }
          createMany: {
            args: ab_camp_userCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: ab_camp_userDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_camp_userPayload>
          }
          update: {
            args: ab_camp_userUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_camp_userPayload>
          }
          deleteMany: {
            args: ab_camp_userDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: ab_camp_userUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: ab_camp_userUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_camp_userPayload>
          }
          aggregate: {
            args: Ab_camp_userAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAb_camp_user>
          }
          groupBy: {
            args: ab_camp_userGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Ab_camp_userGroupByOutputType>[]
          }
          count: {
            args: ab_camp_userCountArgs<ExtArgs>,
            result: $Utils.Optional<Ab_camp_userCountAggregateOutputType> | number
          }
        }
      }
      ab_camp_audit: {
        payload: $ab_camp_auditPayload<ExtArgs>
        fields: ab_camp_auditFieldRefs
        operations: {
          findUnique: {
            args: ab_camp_auditFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_camp_auditPayload> | null
          }
          findUniqueOrThrow: {
            args: ab_camp_auditFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_camp_auditPayload>
          }
          findFirst: {
            args: ab_camp_auditFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_camp_auditPayload> | null
          }
          findFirstOrThrow: {
            args: ab_camp_auditFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_camp_auditPayload>
          }
          findMany: {
            args: ab_camp_auditFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_camp_auditPayload>[]
          }
          create: {
            args: ab_camp_auditCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_camp_auditPayload>
          }
          createMany: {
            args: ab_camp_auditCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: ab_camp_auditDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_camp_auditPayload>
          }
          update: {
            args: ab_camp_auditUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_camp_auditPayload>
          }
          deleteMany: {
            args: ab_camp_auditDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: ab_camp_auditUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: ab_camp_auditUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_camp_auditPayload>
          }
          aggregate: {
            args: Ab_camp_auditAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAb_camp_audit>
          }
          groupBy: {
            args: ab_camp_auditGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Ab_camp_auditGroupByOutputType>[]
          }
          count: {
            args: ab_camp_auditCountArgs<ExtArgs>,
            result: $Utils.Optional<Ab_camp_auditCountAggregateOutputType> | number
          }
        }
      }
      ab_training_env: {
        payload: $ab_training_envPayload<ExtArgs>
        fields: ab_training_envFieldRefs
        operations: {
          findUnique: {
            args: ab_training_envFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_training_envPayload> | null
          }
          findUniqueOrThrow: {
            args: ab_training_envFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_training_envPayload>
          }
          findFirst: {
            args: ab_training_envFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_training_envPayload> | null
          }
          findFirstOrThrow: {
            args: ab_training_envFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_training_envPayload>
          }
          findMany: {
            args: ab_training_envFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_training_envPayload>[]
          }
          create: {
            args: ab_training_envCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_training_envPayload>
          }
          createMany: {
            args: ab_training_envCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: ab_training_envDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_training_envPayload>
          }
          update: {
            args: ab_training_envUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_training_envPayload>
          }
          deleteMany: {
            args: ab_training_envDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: ab_training_envUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: ab_training_envUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$ab_training_envPayload>
          }
          aggregate: {
            args: Ab_training_envAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAb_training_env>
          }
          groupBy: {
            args: ab_training_envGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Ab_training_envGroupByOutputType>[]
          }
          count: {
            args: ab_training_envCountArgs<ExtArgs>,
            result: $Utils.Optional<Ab_training_envCountAggregateOutputType> | number
          }
        }
      }
      admin_event_entity: {
        payload: $admin_event_entityPayload<ExtArgs>
        fields: admin_event_entityFieldRefs
        operations: {
          findUnique: {
            args: admin_event_entityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$admin_event_entityPayload> | null
          }
          findUniqueOrThrow: {
            args: admin_event_entityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$admin_event_entityPayload>
          }
          findFirst: {
            args: admin_event_entityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$admin_event_entityPayload> | null
          }
          findFirstOrThrow: {
            args: admin_event_entityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$admin_event_entityPayload>
          }
          findMany: {
            args: admin_event_entityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$admin_event_entityPayload>[]
          }
          create: {
            args: admin_event_entityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$admin_event_entityPayload>
          }
          createMany: {
            args: admin_event_entityCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: admin_event_entityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$admin_event_entityPayload>
          }
          update: {
            args: admin_event_entityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$admin_event_entityPayload>
          }
          deleteMany: {
            args: admin_event_entityDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: admin_event_entityUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: admin_event_entityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$admin_event_entityPayload>
          }
          aggregate: {
            args: Admin_event_entityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdmin_event_entity>
          }
          groupBy: {
            args: admin_event_entityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Admin_event_entityGroupByOutputType>[]
          }
          count: {
            args: admin_event_entityCountArgs<ExtArgs>,
            result: $Utils.Optional<Admin_event_entityCountAggregateOutputType> | number
          }
        }
      }
      associated_policy: {
        payload: $associated_policyPayload<ExtArgs>
        fields: associated_policyFieldRefs
        operations: {
          findUnique: {
            args: associated_policyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$associated_policyPayload> | null
          }
          findUniqueOrThrow: {
            args: associated_policyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$associated_policyPayload>
          }
          findFirst: {
            args: associated_policyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$associated_policyPayload> | null
          }
          findFirstOrThrow: {
            args: associated_policyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$associated_policyPayload>
          }
          findMany: {
            args: associated_policyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$associated_policyPayload>[]
          }
          create: {
            args: associated_policyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$associated_policyPayload>
          }
          createMany: {
            args: associated_policyCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: associated_policyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$associated_policyPayload>
          }
          update: {
            args: associated_policyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$associated_policyPayload>
          }
          deleteMany: {
            args: associated_policyDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: associated_policyUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: associated_policyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$associated_policyPayload>
          }
          aggregate: {
            args: Associated_policyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAssociated_policy>
          }
          groupBy: {
            args: associated_policyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Associated_policyGroupByOutputType>[]
          }
          count: {
            args: associated_policyCountArgs<ExtArgs>,
            result: $Utils.Optional<Associated_policyCountAggregateOutputType> | number
          }
        }
      }
      authentication_execution: {
        payload: $authentication_executionPayload<ExtArgs>
        fields: authentication_executionFieldRefs
        operations: {
          findUnique: {
            args: authentication_executionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authentication_executionPayload> | null
          }
          findUniqueOrThrow: {
            args: authentication_executionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authentication_executionPayload>
          }
          findFirst: {
            args: authentication_executionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authentication_executionPayload> | null
          }
          findFirstOrThrow: {
            args: authentication_executionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authentication_executionPayload>
          }
          findMany: {
            args: authentication_executionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authentication_executionPayload>[]
          }
          create: {
            args: authentication_executionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authentication_executionPayload>
          }
          createMany: {
            args: authentication_executionCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: authentication_executionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authentication_executionPayload>
          }
          update: {
            args: authentication_executionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authentication_executionPayload>
          }
          deleteMany: {
            args: authentication_executionDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: authentication_executionUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: authentication_executionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authentication_executionPayload>
          }
          aggregate: {
            args: Authentication_executionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAuthentication_execution>
          }
          groupBy: {
            args: authentication_executionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Authentication_executionGroupByOutputType>[]
          }
          count: {
            args: authentication_executionCountArgs<ExtArgs>,
            result: $Utils.Optional<Authentication_executionCountAggregateOutputType> | number
          }
        }
      }
      authentication_flow: {
        payload: $authentication_flowPayload<ExtArgs>
        fields: authentication_flowFieldRefs
        operations: {
          findUnique: {
            args: authentication_flowFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authentication_flowPayload> | null
          }
          findUniqueOrThrow: {
            args: authentication_flowFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authentication_flowPayload>
          }
          findFirst: {
            args: authentication_flowFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authentication_flowPayload> | null
          }
          findFirstOrThrow: {
            args: authentication_flowFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authentication_flowPayload>
          }
          findMany: {
            args: authentication_flowFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authentication_flowPayload>[]
          }
          create: {
            args: authentication_flowCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authentication_flowPayload>
          }
          createMany: {
            args: authentication_flowCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: authentication_flowDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authentication_flowPayload>
          }
          update: {
            args: authentication_flowUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authentication_flowPayload>
          }
          deleteMany: {
            args: authentication_flowDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: authentication_flowUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: authentication_flowUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authentication_flowPayload>
          }
          aggregate: {
            args: Authentication_flowAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAuthentication_flow>
          }
          groupBy: {
            args: authentication_flowGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Authentication_flowGroupByOutputType>[]
          }
          count: {
            args: authentication_flowCountArgs<ExtArgs>,
            result: $Utils.Optional<Authentication_flowCountAggregateOutputType> | number
          }
        }
      }
      authenticator_config: {
        payload: $authenticator_configPayload<ExtArgs>
        fields: authenticator_configFieldRefs
        operations: {
          findUnique: {
            args: authenticator_configFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authenticator_configPayload> | null
          }
          findUniqueOrThrow: {
            args: authenticator_configFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authenticator_configPayload>
          }
          findFirst: {
            args: authenticator_configFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authenticator_configPayload> | null
          }
          findFirstOrThrow: {
            args: authenticator_configFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authenticator_configPayload>
          }
          findMany: {
            args: authenticator_configFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authenticator_configPayload>[]
          }
          create: {
            args: authenticator_configCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authenticator_configPayload>
          }
          createMany: {
            args: authenticator_configCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: authenticator_configDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authenticator_configPayload>
          }
          update: {
            args: authenticator_configUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authenticator_configPayload>
          }
          deleteMany: {
            args: authenticator_configDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: authenticator_configUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: authenticator_configUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authenticator_configPayload>
          }
          aggregate: {
            args: Authenticator_configAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAuthenticator_config>
          }
          groupBy: {
            args: authenticator_configGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Authenticator_configGroupByOutputType>[]
          }
          count: {
            args: authenticator_configCountArgs<ExtArgs>,
            result: $Utils.Optional<Authenticator_configCountAggregateOutputType> | number
          }
        }
      }
      authenticator_config_entry: {
        payload: $authenticator_config_entryPayload<ExtArgs>
        fields: authenticator_config_entryFieldRefs
        operations: {
          findUnique: {
            args: authenticator_config_entryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authenticator_config_entryPayload> | null
          }
          findUniqueOrThrow: {
            args: authenticator_config_entryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authenticator_config_entryPayload>
          }
          findFirst: {
            args: authenticator_config_entryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authenticator_config_entryPayload> | null
          }
          findFirstOrThrow: {
            args: authenticator_config_entryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authenticator_config_entryPayload>
          }
          findMany: {
            args: authenticator_config_entryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authenticator_config_entryPayload>[]
          }
          create: {
            args: authenticator_config_entryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authenticator_config_entryPayload>
          }
          createMany: {
            args: authenticator_config_entryCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: authenticator_config_entryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authenticator_config_entryPayload>
          }
          update: {
            args: authenticator_config_entryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authenticator_config_entryPayload>
          }
          deleteMany: {
            args: authenticator_config_entryDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: authenticator_config_entryUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: authenticator_config_entryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$authenticator_config_entryPayload>
          }
          aggregate: {
            args: Authenticator_config_entryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAuthenticator_config_entry>
          }
          groupBy: {
            args: authenticator_config_entryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Authenticator_config_entryGroupByOutputType>[]
          }
          count: {
            args: authenticator_config_entryCountArgs<ExtArgs>,
            result: $Utils.Optional<Authenticator_config_entryCountAggregateOutputType> | number
          }
        }
      }
      broker_link: {
        payload: $broker_linkPayload<ExtArgs>
        fields: broker_linkFieldRefs
        operations: {
          findUnique: {
            args: broker_linkFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$broker_linkPayload> | null
          }
          findUniqueOrThrow: {
            args: broker_linkFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$broker_linkPayload>
          }
          findFirst: {
            args: broker_linkFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$broker_linkPayload> | null
          }
          findFirstOrThrow: {
            args: broker_linkFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$broker_linkPayload>
          }
          findMany: {
            args: broker_linkFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$broker_linkPayload>[]
          }
          create: {
            args: broker_linkCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$broker_linkPayload>
          }
          createMany: {
            args: broker_linkCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: broker_linkDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$broker_linkPayload>
          }
          update: {
            args: broker_linkUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$broker_linkPayload>
          }
          deleteMany: {
            args: broker_linkDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: broker_linkUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: broker_linkUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$broker_linkPayload>
          }
          aggregate: {
            args: Broker_linkAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBroker_link>
          }
          groupBy: {
            args: broker_linkGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Broker_linkGroupByOutputType>[]
          }
          count: {
            args: broker_linkCountArgs<ExtArgs>,
            result: $Utils.Optional<Broker_linkCountAggregateOutputType> | number
          }
        }
      }
      client: {
        payload: $clientPayload<ExtArgs>
        fields: clientFieldRefs
        operations: {
          findUnique: {
            args: clientFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$clientPayload> | null
          }
          findUniqueOrThrow: {
            args: clientFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$clientPayload>
          }
          findFirst: {
            args: clientFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$clientPayload> | null
          }
          findFirstOrThrow: {
            args: clientFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$clientPayload>
          }
          findMany: {
            args: clientFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$clientPayload>[]
          }
          create: {
            args: clientCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$clientPayload>
          }
          createMany: {
            args: clientCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: clientDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$clientPayload>
          }
          update: {
            args: clientUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$clientPayload>
          }
          deleteMany: {
            args: clientDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: clientUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: clientUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$clientPayload>
          }
          aggregate: {
            args: ClientAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: clientGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: clientCountArgs<ExtArgs>,
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      client_attributes: {
        payload: $client_attributesPayload<ExtArgs>
        fields: client_attributesFieldRefs
        operations: {
          findUnique: {
            args: client_attributesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_attributesPayload> | null
          }
          findUniqueOrThrow: {
            args: client_attributesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_attributesPayload>
          }
          findFirst: {
            args: client_attributesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_attributesPayload> | null
          }
          findFirstOrThrow: {
            args: client_attributesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_attributesPayload>
          }
          findMany: {
            args: client_attributesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_attributesPayload>[]
          }
          create: {
            args: client_attributesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_attributesPayload>
          }
          createMany: {
            args: client_attributesCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: client_attributesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_attributesPayload>
          }
          update: {
            args: client_attributesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_attributesPayload>
          }
          deleteMany: {
            args: client_attributesDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: client_attributesUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: client_attributesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_attributesPayload>
          }
          aggregate: {
            args: Client_attributesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient_attributes>
          }
          groupBy: {
            args: client_attributesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Client_attributesGroupByOutputType>[]
          }
          count: {
            args: client_attributesCountArgs<ExtArgs>,
            result: $Utils.Optional<Client_attributesCountAggregateOutputType> | number
          }
        }
      }
      client_auth_flow_bindings: {
        payload: $client_auth_flow_bindingsPayload<ExtArgs>
        fields: client_auth_flow_bindingsFieldRefs
        operations: {
          findUnique: {
            args: client_auth_flow_bindingsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_auth_flow_bindingsPayload> | null
          }
          findUniqueOrThrow: {
            args: client_auth_flow_bindingsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_auth_flow_bindingsPayload>
          }
          findFirst: {
            args: client_auth_flow_bindingsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_auth_flow_bindingsPayload> | null
          }
          findFirstOrThrow: {
            args: client_auth_flow_bindingsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_auth_flow_bindingsPayload>
          }
          findMany: {
            args: client_auth_flow_bindingsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_auth_flow_bindingsPayload>[]
          }
          create: {
            args: client_auth_flow_bindingsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_auth_flow_bindingsPayload>
          }
          createMany: {
            args: client_auth_flow_bindingsCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: client_auth_flow_bindingsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_auth_flow_bindingsPayload>
          }
          update: {
            args: client_auth_flow_bindingsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_auth_flow_bindingsPayload>
          }
          deleteMany: {
            args: client_auth_flow_bindingsDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: client_auth_flow_bindingsUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: client_auth_flow_bindingsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_auth_flow_bindingsPayload>
          }
          aggregate: {
            args: Client_auth_flow_bindingsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient_auth_flow_bindings>
          }
          groupBy: {
            args: client_auth_flow_bindingsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Client_auth_flow_bindingsGroupByOutputType>[]
          }
          count: {
            args: client_auth_flow_bindingsCountArgs<ExtArgs>,
            result: $Utils.Optional<Client_auth_flow_bindingsCountAggregateOutputType> | number
          }
        }
      }
      client_default_roles: {
        payload: $client_default_rolesPayload<ExtArgs>
        fields: client_default_rolesFieldRefs
        operations: {
          findUnique: {
            args: client_default_rolesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_default_rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: client_default_rolesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_default_rolesPayload>
          }
          findFirst: {
            args: client_default_rolesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_default_rolesPayload> | null
          }
          findFirstOrThrow: {
            args: client_default_rolesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_default_rolesPayload>
          }
          findMany: {
            args: client_default_rolesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_default_rolesPayload>[]
          }
          create: {
            args: client_default_rolesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_default_rolesPayload>
          }
          createMany: {
            args: client_default_rolesCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: client_default_rolesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_default_rolesPayload>
          }
          update: {
            args: client_default_rolesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_default_rolesPayload>
          }
          deleteMany: {
            args: client_default_rolesDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: client_default_rolesUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: client_default_rolesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_default_rolesPayload>
          }
          aggregate: {
            args: Client_default_rolesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient_default_roles>
          }
          groupBy: {
            args: client_default_rolesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Client_default_rolesGroupByOutputType>[]
          }
          count: {
            args: client_default_rolesCountArgs<ExtArgs>,
            result: $Utils.Optional<Client_default_rolesCountAggregateOutputType> | number
          }
        }
      }
      client_initial_access: {
        payload: $client_initial_accessPayload<ExtArgs>
        fields: client_initial_accessFieldRefs
        operations: {
          findUnique: {
            args: client_initial_accessFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_initial_accessPayload> | null
          }
          findUniqueOrThrow: {
            args: client_initial_accessFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_initial_accessPayload>
          }
          findFirst: {
            args: client_initial_accessFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_initial_accessPayload> | null
          }
          findFirstOrThrow: {
            args: client_initial_accessFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_initial_accessPayload>
          }
          findMany: {
            args: client_initial_accessFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_initial_accessPayload>[]
          }
          create: {
            args: client_initial_accessCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_initial_accessPayload>
          }
          createMany: {
            args: client_initial_accessCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: client_initial_accessDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_initial_accessPayload>
          }
          update: {
            args: client_initial_accessUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_initial_accessPayload>
          }
          deleteMany: {
            args: client_initial_accessDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: client_initial_accessUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: client_initial_accessUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_initial_accessPayload>
          }
          aggregate: {
            args: Client_initial_accessAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient_initial_access>
          }
          groupBy: {
            args: client_initial_accessGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Client_initial_accessGroupByOutputType>[]
          }
          count: {
            args: client_initial_accessCountArgs<ExtArgs>,
            result: $Utils.Optional<Client_initial_accessCountAggregateOutputType> | number
          }
        }
      }
      client_node_registrations: {
        payload: $client_node_registrationsPayload<ExtArgs>
        fields: client_node_registrationsFieldRefs
        operations: {
          findUnique: {
            args: client_node_registrationsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_node_registrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: client_node_registrationsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_node_registrationsPayload>
          }
          findFirst: {
            args: client_node_registrationsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_node_registrationsPayload> | null
          }
          findFirstOrThrow: {
            args: client_node_registrationsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_node_registrationsPayload>
          }
          findMany: {
            args: client_node_registrationsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_node_registrationsPayload>[]
          }
          create: {
            args: client_node_registrationsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_node_registrationsPayload>
          }
          createMany: {
            args: client_node_registrationsCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: client_node_registrationsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_node_registrationsPayload>
          }
          update: {
            args: client_node_registrationsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_node_registrationsPayload>
          }
          deleteMany: {
            args: client_node_registrationsDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: client_node_registrationsUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: client_node_registrationsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_node_registrationsPayload>
          }
          aggregate: {
            args: Client_node_registrationsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient_node_registrations>
          }
          groupBy: {
            args: client_node_registrationsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Client_node_registrationsGroupByOutputType>[]
          }
          count: {
            args: client_node_registrationsCountArgs<ExtArgs>,
            result: $Utils.Optional<Client_node_registrationsCountAggregateOutputType> | number
          }
        }
      }
      client_scope: {
        payload: $client_scopePayload<ExtArgs>
        fields: client_scopeFieldRefs
        operations: {
          findUnique: {
            args: client_scopeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scopePayload> | null
          }
          findUniqueOrThrow: {
            args: client_scopeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scopePayload>
          }
          findFirst: {
            args: client_scopeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scopePayload> | null
          }
          findFirstOrThrow: {
            args: client_scopeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scopePayload>
          }
          findMany: {
            args: client_scopeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scopePayload>[]
          }
          create: {
            args: client_scopeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scopePayload>
          }
          createMany: {
            args: client_scopeCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: client_scopeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scopePayload>
          }
          update: {
            args: client_scopeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scopePayload>
          }
          deleteMany: {
            args: client_scopeDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: client_scopeUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: client_scopeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scopePayload>
          }
          aggregate: {
            args: Client_scopeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient_scope>
          }
          groupBy: {
            args: client_scopeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Client_scopeGroupByOutputType>[]
          }
          count: {
            args: client_scopeCountArgs<ExtArgs>,
            result: $Utils.Optional<Client_scopeCountAggregateOutputType> | number
          }
        }
      }
      client_scope_attributes: {
        payload: $client_scope_attributesPayload<ExtArgs>
        fields: client_scope_attributesFieldRefs
        operations: {
          findUnique: {
            args: client_scope_attributesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_attributesPayload> | null
          }
          findUniqueOrThrow: {
            args: client_scope_attributesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_attributesPayload>
          }
          findFirst: {
            args: client_scope_attributesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_attributesPayload> | null
          }
          findFirstOrThrow: {
            args: client_scope_attributesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_attributesPayload>
          }
          findMany: {
            args: client_scope_attributesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_attributesPayload>[]
          }
          create: {
            args: client_scope_attributesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_attributesPayload>
          }
          createMany: {
            args: client_scope_attributesCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: client_scope_attributesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_attributesPayload>
          }
          update: {
            args: client_scope_attributesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_attributesPayload>
          }
          deleteMany: {
            args: client_scope_attributesDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: client_scope_attributesUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: client_scope_attributesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_attributesPayload>
          }
          aggregate: {
            args: Client_scope_attributesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient_scope_attributes>
          }
          groupBy: {
            args: client_scope_attributesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Client_scope_attributesGroupByOutputType>[]
          }
          count: {
            args: client_scope_attributesCountArgs<ExtArgs>,
            result: $Utils.Optional<Client_scope_attributesCountAggregateOutputType> | number
          }
        }
      }
      client_scope_client: {
        payload: $client_scope_clientPayload<ExtArgs>
        fields: client_scope_clientFieldRefs
        operations: {
          findUnique: {
            args: client_scope_clientFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_clientPayload> | null
          }
          findUniqueOrThrow: {
            args: client_scope_clientFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_clientPayload>
          }
          findFirst: {
            args: client_scope_clientFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_clientPayload> | null
          }
          findFirstOrThrow: {
            args: client_scope_clientFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_clientPayload>
          }
          findMany: {
            args: client_scope_clientFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_clientPayload>[]
          }
          create: {
            args: client_scope_clientCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_clientPayload>
          }
          createMany: {
            args: client_scope_clientCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: client_scope_clientDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_clientPayload>
          }
          update: {
            args: client_scope_clientUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_clientPayload>
          }
          deleteMany: {
            args: client_scope_clientDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: client_scope_clientUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: client_scope_clientUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_clientPayload>
          }
          aggregate: {
            args: Client_scope_clientAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient_scope_client>
          }
          groupBy: {
            args: client_scope_clientGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Client_scope_clientGroupByOutputType>[]
          }
          count: {
            args: client_scope_clientCountArgs<ExtArgs>,
            result: $Utils.Optional<Client_scope_clientCountAggregateOutputType> | number
          }
        }
      }
      client_scope_role_mapping: {
        payload: $client_scope_role_mappingPayload<ExtArgs>
        fields: client_scope_role_mappingFieldRefs
        operations: {
          findUnique: {
            args: client_scope_role_mappingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_role_mappingPayload> | null
          }
          findUniqueOrThrow: {
            args: client_scope_role_mappingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_role_mappingPayload>
          }
          findFirst: {
            args: client_scope_role_mappingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_role_mappingPayload> | null
          }
          findFirstOrThrow: {
            args: client_scope_role_mappingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_role_mappingPayload>
          }
          findMany: {
            args: client_scope_role_mappingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_role_mappingPayload>[]
          }
          create: {
            args: client_scope_role_mappingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_role_mappingPayload>
          }
          createMany: {
            args: client_scope_role_mappingCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: client_scope_role_mappingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_role_mappingPayload>
          }
          update: {
            args: client_scope_role_mappingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_role_mappingPayload>
          }
          deleteMany: {
            args: client_scope_role_mappingDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: client_scope_role_mappingUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: client_scope_role_mappingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_scope_role_mappingPayload>
          }
          aggregate: {
            args: Client_scope_role_mappingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient_scope_role_mapping>
          }
          groupBy: {
            args: client_scope_role_mappingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Client_scope_role_mappingGroupByOutputType>[]
          }
          count: {
            args: client_scope_role_mappingCountArgs<ExtArgs>,
            result: $Utils.Optional<Client_scope_role_mappingCountAggregateOutputType> | number
          }
        }
      }
      client_session: {
        payload: $client_sessionPayload<ExtArgs>
        fields: client_sessionFieldRefs
        operations: {
          findUnique: {
            args: client_sessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_sessionPayload> | null
          }
          findUniqueOrThrow: {
            args: client_sessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_sessionPayload>
          }
          findFirst: {
            args: client_sessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_sessionPayload> | null
          }
          findFirstOrThrow: {
            args: client_sessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_sessionPayload>
          }
          findMany: {
            args: client_sessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_sessionPayload>[]
          }
          create: {
            args: client_sessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_sessionPayload>
          }
          createMany: {
            args: client_sessionCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: client_sessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_sessionPayload>
          }
          update: {
            args: client_sessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_sessionPayload>
          }
          deleteMany: {
            args: client_sessionDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: client_sessionUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: client_sessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_sessionPayload>
          }
          aggregate: {
            args: Client_sessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient_session>
          }
          groupBy: {
            args: client_sessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Client_sessionGroupByOutputType>[]
          }
          count: {
            args: client_sessionCountArgs<ExtArgs>,
            result: $Utils.Optional<Client_sessionCountAggregateOutputType> | number
          }
        }
      }
      client_session_auth_status: {
        payload: $client_session_auth_statusPayload<ExtArgs>
        fields: client_session_auth_statusFieldRefs
        operations: {
          findUnique: {
            args: client_session_auth_statusFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_auth_statusPayload> | null
          }
          findUniqueOrThrow: {
            args: client_session_auth_statusFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_auth_statusPayload>
          }
          findFirst: {
            args: client_session_auth_statusFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_auth_statusPayload> | null
          }
          findFirstOrThrow: {
            args: client_session_auth_statusFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_auth_statusPayload>
          }
          findMany: {
            args: client_session_auth_statusFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_auth_statusPayload>[]
          }
          create: {
            args: client_session_auth_statusCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_auth_statusPayload>
          }
          createMany: {
            args: client_session_auth_statusCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: client_session_auth_statusDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_auth_statusPayload>
          }
          update: {
            args: client_session_auth_statusUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_auth_statusPayload>
          }
          deleteMany: {
            args: client_session_auth_statusDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: client_session_auth_statusUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: client_session_auth_statusUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_auth_statusPayload>
          }
          aggregate: {
            args: Client_session_auth_statusAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient_session_auth_status>
          }
          groupBy: {
            args: client_session_auth_statusGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Client_session_auth_statusGroupByOutputType>[]
          }
          count: {
            args: client_session_auth_statusCountArgs<ExtArgs>,
            result: $Utils.Optional<Client_session_auth_statusCountAggregateOutputType> | number
          }
        }
      }
      client_session_note: {
        payload: $client_session_notePayload<ExtArgs>
        fields: client_session_noteFieldRefs
        operations: {
          findUnique: {
            args: client_session_noteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_notePayload> | null
          }
          findUniqueOrThrow: {
            args: client_session_noteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_notePayload>
          }
          findFirst: {
            args: client_session_noteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_notePayload> | null
          }
          findFirstOrThrow: {
            args: client_session_noteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_notePayload>
          }
          findMany: {
            args: client_session_noteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_notePayload>[]
          }
          create: {
            args: client_session_noteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_notePayload>
          }
          createMany: {
            args: client_session_noteCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: client_session_noteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_notePayload>
          }
          update: {
            args: client_session_noteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_notePayload>
          }
          deleteMany: {
            args: client_session_noteDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: client_session_noteUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: client_session_noteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_notePayload>
          }
          aggregate: {
            args: Client_session_noteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient_session_note>
          }
          groupBy: {
            args: client_session_noteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Client_session_noteGroupByOutputType>[]
          }
          count: {
            args: client_session_noteCountArgs<ExtArgs>,
            result: $Utils.Optional<Client_session_noteCountAggregateOutputType> | number
          }
        }
      }
      client_session_prot_mapper: {
        payload: $client_session_prot_mapperPayload<ExtArgs>
        fields: client_session_prot_mapperFieldRefs
        operations: {
          findUnique: {
            args: client_session_prot_mapperFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_prot_mapperPayload> | null
          }
          findUniqueOrThrow: {
            args: client_session_prot_mapperFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_prot_mapperPayload>
          }
          findFirst: {
            args: client_session_prot_mapperFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_prot_mapperPayload> | null
          }
          findFirstOrThrow: {
            args: client_session_prot_mapperFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_prot_mapperPayload>
          }
          findMany: {
            args: client_session_prot_mapperFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_prot_mapperPayload>[]
          }
          create: {
            args: client_session_prot_mapperCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_prot_mapperPayload>
          }
          createMany: {
            args: client_session_prot_mapperCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: client_session_prot_mapperDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_prot_mapperPayload>
          }
          update: {
            args: client_session_prot_mapperUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_prot_mapperPayload>
          }
          deleteMany: {
            args: client_session_prot_mapperDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: client_session_prot_mapperUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: client_session_prot_mapperUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_prot_mapperPayload>
          }
          aggregate: {
            args: Client_session_prot_mapperAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient_session_prot_mapper>
          }
          groupBy: {
            args: client_session_prot_mapperGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Client_session_prot_mapperGroupByOutputType>[]
          }
          count: {
            args: client_session_prot_mapperCountArgs<ExtArgs>,
            result: $Utils.Optional<Client_session_prot_mapperCountAggregateOutputType> | number
          }
        }
      }
      client_session_role: {
        payload: $client_session_rolePayload<ExtArgs>
        fields: client_session_roleFieldRefs
        operations: {
          findUnique: {
            args: client_session_roleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_rolePayload> | null
          }
          findUniqueOrThrow: {
            args: client_session_roleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_rolePayload>
          }
          findFirst: {
            args: client_session_roleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_rolePayload> | null
          }
          findFirstOrThrow: {
            args: client_session_roleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_rolePayload>
          }
          findMany: {
            args: client_session_roleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_rolePayload>[]
          }
          create: {
            args: client_session_roleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_rolePayload>
          }
          createMany: {
            args: client_session_roleCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: client_session_roleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_rolePayload>
          }
          update: {
            args: client_session_roleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_rolePayload>
          }
          deleteMany: {
            args: client_session_roleDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: client_session_roleUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: client_session_roleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_session_rolePayload>
          }
          aggregate: {
            args: Client_session_roleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient_session_role>
          }
          groupBy: {
            args: client_session_roleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Client_session_roleGroupByOutputType>[]
          }
          count: {
            args: client_session_roleCountArgs<ExtArgs>,
            result: $Utils.Optional<Client_session_roleCountAggregateOutputType> | number
          }
        }
      }
      client_user_session_note: {
        payload: $client_user_session_notePayload<ExtArgs>
        fields: client_user_session_noteFieldRefs
        operations: {
          findUnique: {
            args: client_user_session_noteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_user_session_notePayload> | null
          }
          findUniqueOrThrow: {
            args: client_user_session_noteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_user_session_notePayload>
          }
          findFirst: {
            args: client_user_session_noteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_user_session_notePayload> | null
          }
          findFirstOrThrow: {
            args: client_user_session_noteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_user_session_notePayload>
          }
          findMany: {
            args: client_user_session_noteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_user_session_notePayload>[]
          }
          create: {
            args: client_user_session_noteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_user_session_notePayload>
          }
          createMany: {
            args: client_user_session_noteCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: client_user_session_noteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_user_session_notePayload>
          }
          update: {
            args: client_user_session_noteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_user_session_notePayload>
          }
          deleteMany: {
            args: client_user_session_noteDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: client_user_session_noteUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: client_user_session_noteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$client_user_session_notePayload>
          }
          aggregate: {
            args: Client_user_session_noteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient_user_session_note>
          }
          groupBy: {
            args: client_user_session_noteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Client_user_session_noteGroupByOutputType>[]
          }
          count: {
            args: client_user_session_noteCountArgs<ExtArgs>,
            result: $Utils.Optional<Client_user_session_noteCountAggregateOutputType> | number
          }
        }
      }
      component: {
        payload: $componentPayload<ExtArgs>
        fields: componentFieldRefs
        operations: {
          findUnique: {
            args: componentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$componentPayload> | null
          }
          findUniqueOrThrow: {
            args: componentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$componentPayload>
          }
          findFirst: {
            args: componentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$componentPayload> | null
          }
          findFirstOrThrow: {
            args: componentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$componentPayload>
          }
          findMany: {
            args: componentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$componentPayload>[]
          }
          create: {
            args: componentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$componentPayload>
          }
          createMany: {
            args: componentCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: componentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$componentPayload>
          }
          update: {
            args: componentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$componentPayload>
          }
          deleteMany: {
            args: componentDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: componentUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: componentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$componentPayload>
          }
          aggregate: {
            args: ComponentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComponent>
          }
          groupBy: {
            args: componentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ComponentGroupByOutputType>[]
          }
          count: {
            args: componentCountArgs<ExtArgs>,
            result: $Utils.Optional<ComponentCountAggregateOutputType> | number
          }
        }
      }
      component_config: {
        payload: $component_configPayload<ExtArgs>
        fields: component_configFieldRefs
        operations: {
          findUnique: {
            args: component_configFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$component_configPayload> | null
          }
          findUniqueOrThrow: {
            args: component_configFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$component_configPayload>
          }
          findFirst: {
            args: component_configFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$component_configPayload> | null
          }
          findFirstOrThrow: {
            args: component_configFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$component_configPayload>
          }
          findMany: {
            args: component_configFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$component_configPayload>[]
          }
          create: {
            args: component_configCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$component_configPayload>
          }
          createMany: {
            args: component_configCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: component_configDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$component_configPayload>
          }
          update: {
            args: component_configUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$component_configPayload>
          }
          deleteMany: {
            args: component_configDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: component_configUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: component_configUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$component_configPayload>
          }
          aggregate: {
            args: Component_configAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComponent_config>
          }
          groupBy: {
            args: component_configGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Component_configGroupByOutputType>[]
          }
          count: {
            args: component_configCountArgs<ExtArgs>,
            result: $Utils.Optional<Component_configCountAggregateOutputType> | number
          }
        }
      }
      composite_role: {
        payload: $composite_rolePayload<ExtArgs>
        fields: composite_roleFieldRefs
        operations: {
          findUnique: {
            args: composite_roleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$composite_rolePayload> | null
          }
          findUniqueOrThrow: {
            args: composite_roleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$composite_rolePayload>
          }
          findFirst: {
            args: composite_roleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$composite_rolePayload> | null
          }
          findFirstOrThrow: {
            args: composite_roleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$composite_rolePayload>
          }
          findMany: {
            args: composite_roleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$composite_rolePayload>[]
          }
          create: {
            args: composite_roleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$composite_rolePayload>
          }
          createMany: {
            args: composite_roleCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: composite_roleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$composite_rolePayload>
          }
          update: {
            args: composite_roleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$composite_rolePayload>
          }
          deleteMany: {
            args: composite_roleDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: composite_roleUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: composite_roleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$composite_rolePayload>
          }
          aggregate: {
            args: Composite_roleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComposite_role>
          }
          groupBy: {
            args: composite_roleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Composite_roleGroupByOutputType>[]
          }
          count: {
            args: composite_roleCountArgs<ExtArgs>,
            result: $Utils.Optional<Composite_roleCountAggregateOutputType> | number
          }
        }
      }
      credential: {
        payload: $credentialPayload<ExtArgs>
        fields: credentialFieldRefs
        operations: {
          findUnique: {
            args: credentialFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$credentialPayload> | null
          }
          findUniqueOrThrow: {
            args: credentialFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$credentialPayload>
          }
          findFirst: {
            args: credentialFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$credentialPayload> | null
          }
          findFirstOrThrow: {
            args: credentialFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$credentialPayload>
          }
          findMany: {
            args: credentialFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$credentialPayload>[]
          }
          create: {
            args: credentialCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$credentialPayload>
          }
          createMany: {
            args: credentialCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: credentialDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$credentialPayload>
          }
          update: {
            args: credentialUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$credentialPayload>
          }
          deleteMany: {
            args: credentialDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: credentialUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: credentialUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$credentialPayload>
          }
          aggregate: {
            args: CredentialAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCredential>
          }
          groupBy: {
            args: credentialGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CredentialGroupByOutputType>[]
          }
          count: {
            args: credentialCountArgs<ExtArgs>,
            result: $Utils.Optional<CredentialCountAggregateOutputType> | number
          }
        }
      }
      Cookie: {
        payload: $CookiePayload<ExtArgs>
        fields: CookieFieldRefs
        operations: {
          findUnique: {
            args: CookieFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$CookiePayload> | null
          }
          findUniqueOrThrow: {
            args: CookieFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$CookiePayload>
          }
          findFirst: {
            args: CookieFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$CookiePayload> | null
          }
          findFirstOrThrow: {
            args: CookieFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$CookiePayload>
          }
          findMany: {
            args: CookieFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$CookiePayload>[]
          }
          create: {
            args: CookieCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$CookiePayload>
          }
          createMany: {
            args: CookieCreateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          delete: {
            args: CookieDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$CookiePayload>
          }
          update: {
            args: CookieUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$CookiePayload>
          }
          deleteMany: {
            args: CookieDeleteManyArgs<ExtArgs>,
            result: BatchPayload
          }
          updateMany: {
            args: CookieUpdateManyArgs<ExtArgs>,
            result: BatchPayload
          }
          upsert: {
            args: CookieUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<$CookiePayload>
          }
          aggregate: {
            args: CookieAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCookie>
          }
          groupBy: {
            args: CookieGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CookieGroupByOutputType>[]
          }
          count: {
            args: CookieCountArgs<ExtArgs>,
            result: $Utils.Optional<CookieCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  export interface ab_email_domainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['ab_email_domain'], meta: { name: 'ab_email_domain' } }
    /**
     * Find zero or one Ab_email_domain that matches the filter.
     * @param {ab_email_domainFindUniqueArgs} args - Arguments to find a Ab_email_domain
     * @example
     * // Get one Ab_email_domain
     * const ab_email_domain = await ab_email_domain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ab_email_domainFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ab_email_domainFindUniqueArgs<ExtArgs>>
    ): Prisma__ab_email_domainClient<$Result.GetResult<$ab_email_domainPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ab_email_domain that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ab_email_domainFindUniqueOrThrowArgs} args - Arguments to find a Ab_email_domain
     * @example
     * // Get one Ab_email_domain
     * const ab_email_domain = await ab_email_domain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ab_email_domainFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_email_domainFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ab_email_domainClient<$Result.GetResult<$ab_email_domainPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ab_email_domain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_email_domainFindFirstArgs} args - Arguments to find a Ab_email_domain
     * @example
     * // Get one Ab_email_domain
     * const ab_email_domain = await ab_email_domain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ab_email_domainFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_email_domainFindFirstArgs<ExtArgs>>
    ): Prisma__ab_email_domainClient<$Result.GetResult<$ab_email_domainPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ab_email_domain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_email_domainFindFirstOrThrowArgs} args - Arguments to find a Ab_email_domain
     * @example
     * // Get one Ab_email_domain
     * const ab_email_domain = await prisma.ab_email_domain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ab_email_domainFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_email_domainFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ab_email_domainClient<$Result.GetResult<$ab_email_domainPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ab_email_domains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_email_domainFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ab_email_domains
     * const ab_email_domains = await prisma.ab_email_domain.findMany()
     * 
     * // Get first 10 Ab_email_domains
     * const ab_email_domains = await prisma.ab_email_domain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ab_email_domainWithIdOnly = await prisma.ab_email_domain.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ab_email_domainFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_email_domainFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$ab_email_domainPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ab_email_domain.
     * @param {ab_email_domainCreateArgs} args - Arguments to create a Ab_email_domain.
     * @example
     * // Create one Ab_email_domain
     * const Ab_email_domain = await prisma.ab_email_domain.create({
     *   data: {
     *     // ... data to create a Ab_email_domain
     *   }
     * })
     * 
    **/
    create<T extends ab_email_domainCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ab_email_domainCreateArgs<ExtArgs>>
    ): Prisma__ab_email_domainClient<$Result.GetResult<$ab_email_domainPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ab_email_domains.
     *     @param {ab_email_domainCreateManyArgs} args - Arguments to create many Ab_email_domains.
     *     @example
     *     // Create many Ab_email_domains
     *     const ab_email_domain = await ab_email_domain.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ab_email_domainCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_email_domainCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Ab_email_domain.
     * @param {ab_email_domainDeleteArgs} args - Arguments to delete one Ab_email_domain.
     * @example
     * // Delete one Ab_email_domain
     * const Ab_email_domain = await prisma.ab_email_domain.delete({
     *   where: {
     *     // ... filter to delete one Ab_email_domain
     *   }
     * })
     * 
    **/
    delete<T extends ab_email_domainDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ab_email_domainDeleteArgs<ExtArgs>>
    ): Prisma__ab_email_domainClient<$Result.GetResult<$ab_email_domainPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ab_email_domain.
     * @param {ab_email_domainUpdateArgs} args - Arguments to update one Ab_email_domain.
     * @example
     * // Update one Ab_email_domain
     * const ab_email_domain = await prisma.ab_email_domain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ab_email_domainUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ab_email_domainUpdateArgs<ExtArgs>>
    ): Prisma__ab_email_domainClient<$Result.GetResult<$ab_email_domainPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ab_email_domains.
     * @param {ab_email_domainDeleteManyArgs} args - Arguments to filter Ab_email_domains to delete.
     * @example
     * // Delete a few Ab_email_domains
     * const { count } = await ab_email_domain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ab_email_domainDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ab_email_domainDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ab_email_domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_email_domainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ab_email_domains
     * const ab_email_domain = await prisma.ab_email_domain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ab_email_domainUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ab_email_domainUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Ab_email_domain.
     * @param {ab_email_domainUpsertArgs} args - Arguments to update or create a Ab_email_domain.
     * @example
     * // Update or create a Ab_email_domain
     * const ab_email_domain = await prisma.ab_email_domain.upsert({
     *   create: {
     *     // ... data to create a Ab_email_domain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ab_email_domain we want to update
     *   }
     * })
    **/
    upsert<T extends ab_email_domainUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ab_email_domainUpsertArgs<ExtArgs>>
    ): Prisma__ab_email_domainClient<$Result.GetResult<$ab_email_domainPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ab_email_domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_email_domainCountArgs} args - Arguments to filter Ab_email_domains to count.
     * @example
     * // Count the number of Ab_email_domains
     * const count = await prisma.ab_email_domain.count({
     *   where: {
     *     // ... the filter for the Ab_email_domains we want to count
     *   }
     * })
    **/
    count<T extends ab_email_domainCountArgs>(
      args?: Subset<T, ab_email_domainCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ab_email_domainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ab_email_domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ab_email_domainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ab_email_domainAggregateArgs>(args: Subset<T, Ab_email_domainAggregateArgs>): PrismaPromise<GetAb_email_domainAggregateType<T>>

    /**
     * Group by Ab_email_domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ab_email_domainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ab_email_domainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ab_email_domainGroupByArgs['orderBy'] }
        : { orderBy?: ab_email_domainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ab_email_domainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAb_email_domainGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the ab_email_domain model
   */
  readonly fields: ab_email_domainFieldRefs;
  }

  export interface admin_event_entityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['admin_event_entity'], meta: { name: 'admin_event_entity' } }
    /**
     * Find zero or one Admin_event_entity that matches the filter.
     * @param {admin_event_entityFindUniqueArgs} args - Arguments to find a Admin_event_entity
     * @example
     * // Get one Admin_event_entity
     * const admin_event_entity = await prisma.admin_event_entity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends admin_event_entityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, admin_event_entityFindUniqueArgs<ExtArgs>>
    ): Prisma__admin_event_entityClient<$Result.GetResult<$admin_event_entityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admin_event_entity that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {admin_event_entityFindUniqueOrThrowArgs} args - Arguments to find a Admin_event_entity
     * @example
     * // Get one Admin_event_entity
     * const admin_event_entity = await prisma.admin_event_entity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends admin_event_entityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, admin_event_entityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__admin_event_entityClient<$Result.GetResult<$admin_event_entityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admin_event_entity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_event_entityFindFirstArgs} args - Arguments to find a Admin_event_entity
     * @example
     * // Get one Admin_event_entity
     * const admin_event_entity = await prisma.admin_event_entity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends admin_event_entityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, admin_event_entityFindFirstArgs<ExtArgs>>
    ): Prisma__admin_event_entityClient<$Result.GetResult<$admin_event_entityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admin_event_entity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_event_entityFindFirstOrThrowArgs} args - Arguments to find a Admin_event_entity
     * @example
     * // Get one Admin_event_entity
     * const admin_event_entity = await prisma.admin_event_entity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends admin_event_entityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, admin_event_entityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__admin_event_entityClient<$Result.GetResult<$admin_event_entityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admin_event_entities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_event_entityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admin_event_entities
     * const admin_event_entities = await prisma.admin_event_entity.findMany()
     * 
     * // Get first 10 Admin_event_entities
     * const admin_event_entities = await prisma.admin_event_entity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const admin_event_entityWithIdOnly = await prisma.admin_event_entity.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends admin_event_entityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, admin_event_entityFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$admin_event_entityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admin_event_entity.
     * @param {admin_event_entityCreateArgs} args - Arguments to create a Admin_event_entity.
     * @example
     * // Create one Admin_event_entity
     * const Admin_event_entity = await prisma.admin_event_entity.create({
     *   data: {
     *     // ... data to create a Admin_event_entity
     *   }
     * })
     * 
    **/
    create<T extends admin_event_entityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, admin_event_entityCreateArgs<ExtArgs>>
    ): Prisma__admin_event_entityClient<$Result.GetResult<$admin_event_entityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admin_event_entities.
     *     @param {admin_event_entityCreateManyArgs} args - Arguments to create many Admin_event_entities.
     *     @example
     *     // Create many Admin_event_entities
     *     const admin_event_entity = await prisma.admin_event_entity.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends admin_event_entityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, admin_event_entityCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Admin_event_entity.
     * @param {admin_event_entityDeleteArgs} args - Arguments to delete one Admin_event_entity.
     * @example
     * // Delete one Admin_event_entity
     * const Admin_event_entity = await prisma.admin_event_entity.delete({
     *   where: {
     *     // ... filter to delete one Admin_event_entity
     *   }
     * })
     * 
    **/
    delete<T extends admin_event_entityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, admin_event_entityDeleteArgs<ExtArgs>>
    ): Prisma__admin_event_entityClient<$Result.GetResult<$admin_event_entityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admin_event_entity.
     * @param {admin_event_entityUpdateArgs} args - Arguments to update one Admin_event_entity.
     * @example
     * // Update one Admin_event_entity
     * const admin_event_entity = await prisma.admin_event_entity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends admin_event_entityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, admin_event_entityUpdateArgs<ExtArgs>>
    ): Prisma__admin_event_entityClient<$Result.GetResult<$admin_event_entityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admin_event_entities.
     * @param {admin_event_entityDeleteManyArgs} args - Arguments to filter Admin_event_entities to delete.
     * @example
     * // Delete a few Admin_event_entities
     * const { count } = await prisma.admin_event_entity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends admin_event_entityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, admin_event_entityDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_event_entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_event_entityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admin_event_entities
     * const admin_event_entity = await prisma.admin_event_entity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends admin_event_entityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, admin_event_entityUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin_event_entity.
     * @param {admin_event_entityUpsertArgs} args - Arguments to update or create a Admin_event_entity.
     * @example
     * // Update or create a Admin_event_entity
     * const admin_event_entity = await prisma.admin_event_entity.upsert({
     *   create: {
     *     // ... data to create a Admin_event_entity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin_event_entity we want to update
     *   }
     * })
    **/
    upsert<T extends admin_event_entityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, admin_event_entityUpsertArgs<ExtArgs>>
    ): Prisma__admin_event_entityClient<$Result.GetResult<$admin_event_entityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Admin_event_entities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_event_entityCountArgs} args - Arguments to filter Admin_event_entities to count.
     * @example
     * // Count the number of Admin_event_entities
     * const count = await prisma.admin_event_entity.count({
     *   where: {
     *     // ... the filter for the Admin_event_entities we want to count
     *   }
     * })
    **/
    count<T extends admin_event_entityCountArgs>(
      args?: Subset<T, admin_event_entityCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Admin_event_entityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin_event_entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_event_entityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Admin_event_entityAggregateArgs>(args: Subset<T, Admin_event_entityAggregateArgs>): PrismaPromise<GetAdmin_event_entityAggregateType<T>>

    /**
     * Group by Admin_event_entity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {admin_event_entityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends admin_event_entityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: admin_event_entityGroupByArgs['orderBy'] }
        : { orderBy?: admin_event_entityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, admin_event_entityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmin_event_entityGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the admin_event_entity model
   */
  readonly fields: admin_event_entityFieldRefs;
  }
  type GetAdmin_event_entityGroupByPayload<T extends admin_event_entityGroupByArgs> = PrismaPromise<
  Array<
    PickEnumerable<Admin_event_entityGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof Admin_event_entityGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Admin_event_entityGroupByOutputType[P]>
          : GetScalarType<T[P], Admin_event_entityGroupByOutputType[P]>
      }
    >
  >
  export type GetAdmin_event_entityAggregateType<T extends Admin_event_entityAggregateArgs> = {
    [P in keyof T & keyof AggregateAdmin_event_entity]: P extends '_count' | 'count'
  ? T[P] extends true
    ? number
    : GetScalarType<T[P], AggregateAdmin_event_entity[P]>
  : GetScalarType<T[P], AggregateAdmin_event_entity[P]>
}

    /**
   * The delegate class that acts as a "Promise-like" for admin_event_entity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
    export interface Prisma__admin_event_entityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
      readonly [Symbol.toStringTag]: 'PrismaPromise';
  
  
      /**
       * Attaches callbacks for the resolution and/or rejection of the Promise.
       * @param onfulfilled The callback to execute when the Promise is resolved.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of which ever callback is executed.
       */
      then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
      /**
       * Attaches a callback for only the rejection of the Promise.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of the callback.
       */
      catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
      /**
       * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
       * resolved value cannot be modified from the callback.
       * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
       * @returns A Promise for the completion of the callback.
       */
      finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
    }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]

  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
 

 


  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

   /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

   export type BatchPayload = {
    count: number
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  
  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }


  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type Enumstatus_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.status_type | Enumstatus_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.status_type[] | ListEnumstatus_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status_type[] | ListEnumstatus_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatus_typeNullableFilter<$PrismaModel> | $Enums.status_type | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }


  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NullableEnumstatus_typeFieldUpdateOperationsInput = {
    set?: $Enums.status_type | null
  }

  export type Enumstatus_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_type | Enumstatus_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.status_type[] | ListEnumstatus_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status_type[] | ListEnumstatus_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatus_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.status_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumstatus_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumstatus_typeNullableFilter<$PrismaModel>
  }


  export type NestedEnumstatus_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.status_type | Enumstatus_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.status_type[] | ListEnumstatus_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status_type[] | ListEnumstatus_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatus_typeNullableFilter<$PrismaModel> | $Enums.status_type | null
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumstatus_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status_type | Enumstatus_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.status_type[] | ListEnumstatus_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.status_type[] | ListEnumstatus_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumstatus_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.status_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumstatus_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumstatus_typeNullableFilter<$PrismaModel>
  }


  /**
   * Reference to a field of type 'status_type[]'
   */
  export type ListEnumstatus_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_type[]'>
    


  /**
   * Reference to a field of type 'status_type'
   */
  export type Enumstatus_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status_type'>
    



  /**
 * Enums
 */
export namespace $Enums {
  export const status_type: {
  CONFIGURING: 'CONFIGURING',
  READY: 'READY',
  REQUESTED: 'REQUESTED',
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  STOPPING: 'STOPPING',
  TERMINATED: 'TERMINATED',
  ERROR: 'ERROR',
  ERROR_DURING_DELETE: 'ERROR_DURING_DELETE'
};

export type status_type = (typeof status_type)[keyof typeof status_type]

}

export type status_type = $Enums.status_type

export const status_type: typeof $Enums.status_type


  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }


  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }
  
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }


  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF

