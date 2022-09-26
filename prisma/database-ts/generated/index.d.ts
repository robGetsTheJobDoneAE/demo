
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  date: Date
  name: string
  email: string
}

/**
 * Model Project
 * 
 */
export type Project = {
  id: number
  date: Date
  name: string
  elasticIndex: string
  userId: number
  emailId: number | null
  slackId: number | null
}

/**
 * Model UserMonitor
 * 
 */
export type UserMonitor = {
  id: number
  name: string
  email: string
  slack: string | null
  date: Date
}

/**
 * Model Email
 * 
 */
export type Email = {
  id: number
  channel: string | null
  userId: number
  date: Date
  created: Date
  score: number
  magnitude: number
}

/**
 * Model Slack
 * 
 */
export type Slack = {
  id: number
  channel: string | null
  userId: number
  date: Date
  created: Date
  score: number
  magnitude: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<GlobalReject>;

  /**
   * `prisma.userMonitor`: Exposes CRUD operations for the **UserMonitor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMonitors
    * const userMonitors = await prisma.userMonitor.findMany()
    * ```
    */
  get userMonitor(): Prisma.UserMonitorDelegate<GlobalReject>;

  /**
   * `prisma.email`: Exposes CRUD operations for the **Email** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emails
    * const emails = await prisma.email.findMany()
    * ```
    */
  get email(): Prisma.EmailDelegate<GlobalReject>;

  /**
   * `prisma.slack`: Exposes CRUD operations for the **Slack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Slacks
    * const slacks = await prisma.slack.findMany()
    * ```
    */
  get slack(): Prisma.SlackDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.3.1
   * Query Engine version: c875e43600dfe042452e0b868f7a48b817b9640b
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
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
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
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Project: 'Project',
    UserMonitor: 'UserMonitor',
    Email: 'Email',
    Slack: 'Slack'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
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

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    Project: number
  }

  export type UserCountOutputTypeSelect = {
    Project?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type ProjectCountOutputType
   */


  export type ProjectCountOutputType = {
    monitors: number
  }

  export type ProjectCountOutputTypeSelect = {
    monitors?: boolean
  }

  export type ProjectCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProjectCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProjectCountOutputType
    : S extends undefined
    ? never
    : S extends ProjectCountOutputTypeArgs
    ?'include' extends U
    ? ProjectCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ProjectCountOutputType ? ProjectCountOutputType[P] : never
  } 
    : ProjectCountOutputType
  : ProjectCountOutputType




  // Custom InputTypes

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     * 
    **/
    select?: ProjectCountOutputTypeSelect | null
  }



  /**
   * Count Type UserMonitorCountOutputType
   */


  export type UserMonitorCountOutputType = {
    toEmails: number
    fromEmails: number
    toSlack: number
    fromSlack: number
    Project: number
  }

  export type UserMonitorCountOutputTypeSelect = {
    toEmails?: boolean
    fromEmails?: boolean
    toSlack?: boolean
    fromSlack?: boolean
    Project?: boolean
  }

  export type UserMonitorCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserMonitorCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserMonitorCountOutputType
    : S extends undefined
    ? never
    : S extends UserMonitorCountOutputTypeArgs
    ?'include' extends U
    ? UserMonitorCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserMonitorCountOutputType ? UserMonitorCountOutputType[P] : never
  } 
    : UserMonitorCountOutputType
  : UserMonitorCountOutputType




  // Custom InputTypes

  /**
   * UserMonitorCountOutputType without action
   */
  export type UserMonitorCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserMonitorCountOutputType
     * 
    **/
    select?: UserMonitorCountOutputTypeSelect | null
  }



  /**
   * Count Type EmailCountOutputType
   */


  export type EmailCountOutputType = {
    to: number
    Project: number
  }

  export type EmailCountOutputTypeSelect = {
    to?: boolean
    Project?: boolean
  }

  export type EmailCountOutputTypeGetPayload<
    S extends boolean | null | undefined | EmailCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? EmailCountOutputType
    : S extends undefined
    ? never
    : S extends EmailCountOutputTypeArgs
    ?'include' extends U
    ? EmailCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof EmailCountOutputType ? EmailCountOutputType[P] : never
  } 
    : EmailCountOutputType
  : EmailCountOutputType




  // Custom InputTypes

  /**
   * EmailCountOutputType without action
   */
  export type EmailCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EmailCountOutputType
     * 
    **/
    select?: EmailCountOutputTypeSelect | null
  }



  /**
   * Count Type SlackCountOutputType
   */


  export type SlackCountOutputType = {
    to: number
    Project: number
  }

  export type SlackCountOutputTypeSelect = {
    to?: boolean
    Project?: boolean
  }

  export type SlackCountOutputTypeGetPayload<
    S extends boolean | null | undefined | SlackCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? SlackCountOutputType
    : S extends undefined
    ? never
    : S extends SlackCountOutputTypeArgs
    ?'include' extends U
    ? SlackCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof SlackCountOutputType ? SlackCountOutputType[P] : never
  } 
    : SlackCountOutputType
  : SlackCountOutputType




  // Custom InputTypes

  /**
   * SlackCountOutputType without action
   */
  export type SlackCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SlackCountOutputType
     * 
    **/
    select?: SlackCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    date: Date | null
    name: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    name: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    date: number
    name: number
    email: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    date?: true
    name?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    date?: true
    name?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    date?: true
    name?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    date: Date
    name: string
    email: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    date?: boolean
    name?: boolean
    email?: boolean
    Project?: boolean | ProjectFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    Project?: boolean | ProjectFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Project' ? Array < ProjectGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Project' ? Array < ProjectGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Project<T extends ProjectFindManyArgs = {}>(args?: Subset<T, ProjectFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Project>>, PrismaPromise<Array<ProjectGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Project
   */


  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    emailId: number | null
    slackId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    userId: number | null
    emailId: number | null
    slackId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    date: Date | null
    name: string | null
    elasticIndex: string | null
    userId: number | null
    emailId: number | null
    slackId: number | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    name: string | null
    elasticIndex: string | null
    userId: number | null
    emailId: number | null
    slackId: number | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    date: number
    name: number
    elasticIndex: number
    userId: number
    emailId: number
    slackId: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    userId?: true
    emailId?: true
    slackId?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    userId?: true
    emailId?: true
    slackId?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    date?: true
    name?: true
    elasticIndex?: true
    userId?: true
    emailId?: true
    slackId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    date?: true
    name?: true
    elasticIndex?: true
    userId?: true
    emailId?: true
    slackId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    date?: true
    name?: true
    elasticIndex?: true
    userId?: true
    emailId?: true
    slackId?: true
    _all?: true
  }

  export type ProjectAggregateArgs = {
    /**
     * Filter which Project to aggregate.
     * 
    **/
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs = {
    where?: ProjectWhereInput
    orderBy?: Enumerable<ProjectOrderByWithAggregationInput>
    by: Array<ProjectScalarFieldEnum>
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }


  export type ProjectGroupByOutputType = {
    id: number
    date: Date
    name: string
    elasticIndex: string
    userId: number
    emailId: number | null
    slackId: number | null
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect = {
    id?: boolean
    date?: boolean
    name?: boolean
    elasticIndex?: boolean
    owner?: boolean | UserArgs
    monitors?: boolean | UserMonitorFindManyArgs
    userId?: boolean
    Email?: boolean | EmailArgs
    emailId?: boolean
    Slack?: boolean | SlackArgs
    slackId?: boolean
    _count?: boolean | ProjectCountOutputTypeArgs
  }

  export type ProjectInclude = {
    owner?: boolean | UserArgs
    monitors?: boolean | UserMonitorFindManyArgs
    Email?: boolean | EmailArgs
    Slack?: boolean | SlackArgs
    _count?: boolean | ProjectCountOutputTypeArgs
  }

  export type ProjectGetPayload<
    S extends boolean | null | undefined | ProjectArgs,
    U = keyof S
      > = S extends true
        ? Project
    : S extends undefined
    ? never
    : S extends ProjectArgs | ProjectFindManyArgs
    ?'include' extends U
    ? Project  & {
    [P in TrueKeys<S['include']>]:
        P extends 'owner' ? UserGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'monitors' ? Array < UserMonitorGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'Email' ? EmailGetPayload<Exclude<S['include'], undefined | null>[P]> | null :
        P extends 'Slack' ? SlackGetPayload<Exclude<S['include'], undefined | null>[P]> | null :
        P extends '_count' ? ProjectCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'owner' ? UserGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'monitors' ? Array < UserMonitorGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'Email' ? EmailGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends 'Slack' ? SlackGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends '_count' ? ProjectCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Project ? Project[P] : never
  } 
    : Project
  : Project


  type ProjectCountArgs = Merge<
    Omit<ProjectFindManyArgs, 'select' | 'include'> & {
      select?: ProjectCountAggregateInputType | true
    }
  >

  export interface ProjectDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProjectFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Project'> extends True ? CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>> : CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProjectFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Project'> extends True ? CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>> : CheckSelect<T, Prisma__ProjectClient<Project | null >, Prisma__ProjectClient<ProjectGetPayload<T> | null >>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjectFindManyArgs>(
      args?: SelectSubset<T, ProjectFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Project>>, PrismaPromise<Array<ProjectGetPayload<T>>>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
    **/
    create<T extends ProjectCreateArgs>(
      args: SelectSubset<T, ProjectCreateArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Create many Projects.
     *     @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectCreateManyArgs>(
      args?: SelectSubset<T, ProjectCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
    **/
    delete<T extends ProjectDeleteArgs>(
      args: SelectSubset<T, ProjectDeleteArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectUpdateArgs>(
      args: SelectSubset<T, ProjectUpdateArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectDeleteManyArgs>(
      args?: SelectSubset<T, ProjectDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectUpdateManyArgs>(
      args: SelectSubset<T, ProjectUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectUpsertArgs>(
      args: SelectSubset<T, ProjectUpsertArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Find one Project that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProjectFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Find the first Project that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProjectFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ProjectClient<Project>, Prisma__ProjectClient<ProjectGetPayload<T>>>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProjectClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    owner<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    monitors<T extends UserMonitorFindManyArgs = {}>(args?: Subset<T, UserMonitorFindManyArgs>): CheckSelect<T, PrismaPromise<Array<UserMonitor>>, PrismaPromise<Array<UserMonitorGetPayload<T>>>>;

    Email<T extends EmailArgs = {}>(args?: Subset<T, EmailArgs>): CheckSelect<T, Prisma__EmailClient<Email | null >, Prisma__EmailClient<EmailGetPayload<T> | null >>;

    Slack<T extends SlackArgs = {}>(args?: Subset<T, SlackArgs>): CheckSelect<T, Prisma__SlackClient<Slack | null >, Prisma__SlackClient<SlackGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Project base type for findUnique actions
   */
  export type ProjectFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter, which Project to fetch.
     * 
    **/
    where: ProjectWhereUniqueInput
  }

  /**
   * Project: findUnique
   */
  export interface ProjectFindUniqueArgs extends ProjectFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Project base type for findFirst actions
   */
  export type ProjectFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter, which Project to fetch.
     * 
    **/
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     * 
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     * 
    **/
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }

  /**
   * Project: findFirst
   */
  export interface ProjectFindFirstArgs extends ProjectFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter, which Projects to fetch.
     * 
    **/
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     * 
    **/
    orderBy?: Enumerable<ProjectOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     * 
    **/
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProjectScalarFieldEnum>
  }


  /**
   * Project create
   */
  export type ProjectCreateArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * The data needed to create a Project.
     * 
    **/
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }


  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs = {
    /**
     * The data used to create many Projects.
     * 
    **/
    data: Enumerable<ProjectCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Project update
   */
  export type ProjectUpdateArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * The data needed to update a Project.
     * 
    **/
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     * 
    **/
    where: ProjectWhereUniqueInput
  }


  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs = {
    /**
     * The data used to update Projects.
     * 
    **/
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     * 
    **/
    where?: ProjectWhereInput
  }


  /**
   * Project upsert
   */
  export type ProjectUpsertArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * The filter to search for the Project to update in case it exists.
     * 
    **/
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     * 
    **/
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }


  /**
   * Project delete
   */
  export type ProjectDeleteArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
    /**
     * Filter which Project to delete.
     * 
    **/
    where: ProjectWhereUniqueInput
  }


  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs = {
    /**
     * Filter which Projects to delete
     * 
    **/
    where?: ProjectWhereInput
  }


  /**
   * Project: findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs = ProjectFindUniqueArgsBase
      

  /**
   * Project: findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs = ProjectFindFirstArgsBase
      

  /**
   * Project without action
   */
  export type ProjectArgs = {
    /**
     * Select specific fields to fetch from the Project
     * 
    **/
    select?: ProjectSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProjectInclude | null
  }



  /**
   * Model UserMonitor
   */


  export type AggregateUserMonitor = {
    _count: UserMonitorCountAggregateOutputType | null
    _avg: UserMonitorAvgAggregateOutputType | null
    _sum: UserMonitorSumAggregateOutputType | null
    _min: UserMonitorMinAggregateOutputType | null
    _max: UserMonitorMaxAggregateOutputType | null
  }

  export type UserMonitorAvgAggregateOutputType = {
    id: number | null
  }

  export type UserMonitorSumAggregateOutputType = {
    id: number | null
  }

  export type UserMonitorMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    slack: string | null
    date: Date | null
  }

  export type UserMonitorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    slack: string | null
    date: Date | null
  }

  export type UserMonitorCountAggregateOutputType = {
    id: number
    name: number
    email: number
    slack: number
    date: number
    _all: number
  }


  export type UserMonitorAvgAggregateInputType = {
    id?: true
  }

  export type UserMonitorSumAggregateInputType = {
    id?: true
  }

  export type UserMonitorMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    slack?: true
    date?: true
  }

  export type UserMonitorMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    slack?: true
    date?: true
  }

  export type UserMonitorCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    slack?: true
    date?: true
    _all?: true
  }

  export type UserMonitorAggregateArgs = {
    /**
     * Filter which UserMonitor to aggregate.
     * 
    **/
    where?: UserMonitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMonitors to fetch.
     * 
    **/
    orderBy?: Enumerable<UserMonitorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserMonitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMonitors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMonitors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMonitors
    **/
    _count?: true | UserMonitorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserMonitorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserMonitorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMonitorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMonitorMaxAggregateInputType
  }

  export type GetUserMonitorAggregateType<T extends UserMonitorAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMonitor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMonitor[P]>
      : GetScalarType<T[P], AggregateUserMonitor[P]>
  }




  export type UserMonitorGroupByArgs = {
    where?: UserMonitorWhereInput
    orderBy?: Enumerable<UserMonitorOrderByWithAggregationInput>
    by: Array<UserMonitorScalarFieldEnum>
    having?: UserMonitorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMonitorCountAggregateInputType | true
    _avg?: UserMonitorAvgAggregateInputType
    _sum?: UserMonitorSumAggregateInputType
    _min?: UserMonitorMinAggregateInputType
    _max?: UserMonitorMaxAggregateInputType
  }


  export type UserMonitorGroupByOutputType = {
    id: number
    name: string
    email: string
    slack: string | null
    date: Date
    _count: UserMonitorCountAggregateOutputType | null
    _avg: UserMonitorAvgAggregateOutputType | null
    _sum: UserMonitorSumAggregateOutputType | null
    _min: UserMonitorMinAggregateOutputType | null
    _max: UserMonitorMaxAggregateOutputType | null
  }

  type GetUserMonitorGroupByPayload<T extends UserMonitorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserMonitorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMonitorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMonitorGroupByOutputType[P]>
            : GetScalarType<T[P], UserMonitorGroupByOutputType[P]>
        }
      >
    >


  export type UserMonitorSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    slack?: boolean
    date?: boolean
    toEmails?: boolean | EmailFindManyArgs
    fromEmails?: boolean | EmailFindManyArgs
    toSlack?: boolean | SlackFindManyArgs
    fromSlack?: boolean | SlackFindManyArgs
    Project?: boolean | ProjectFindManyArgs
    _count?: boolean | UserMonitorCountOutputTypeArgs
  }

  export type UserMonitorInclude = {
    toEmails?: boolean | EmailFindManyArgs
    fromEmails?: boolean | EmailFindManyArgs
    toSlack?: boolean | SlackFindManyArgs
    fromSlack?: boolean | SlackFindManyArgs
    Project?: boolean | ProjectFindManyArgs
    _count?: boolean | UserMonitorCountOutputTypeArgs
  }

  export type UserMonitorGetPayload<
    S extends boolean | null | undefined | UserMonitorArgs,
    U = keyof S
      > = S extends true
        ? UserMonitor
    : S extends undefined
    ? never
    : S extends UserMonitorArgs | UserMonitorFindManyArgs
    ?'include' extends U
    ? UserMonitor  & {
    [P in TrueKeys<S['include']>]:
        P extends 'toEmails' ? Array < EmailGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'fromEmails' ? Array < EmailGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'toSlack' ? Array < SlackGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'fromSlack' ? Array < SlackGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'Project' ? Array < ProjectGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? UserMonitorCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'toEmails' ? Array < EmailGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'fromEmails' ? Array < EmailGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'toSlack' ? Array < SlackGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'fromSlack' ? Array < SlackGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'Project' ? Array < ProjectGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? UserMonitorCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof UserMonitor ? UserMonitor[P] : never
  } 
    : UserMonitor
  : UserMonitor


  type UserMonitorCountArgs = Merge<
    Omit<UserMonitorFindManyArgs, 'select' | 'include'> & {
      select?: UserMonitorCountAggregateInputType | true
    }
  >

  export interface UserMonitorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one UserMonitor that matches the filter.
     * @param {UserMonitorFindUniqueArgs} args - Arguments to find a UserMonitor
     * @example
     * // Get one UserMonitor
     * const userMonitor = await prisma.userMonitor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserMonitorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserMonitorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserMonitor'> extends True ? CheckSelect<T, Prisma__UserMonitorClient<UserMonitor>, Prisma__UserMonitorClient<UserMonitorGetPayload<T>>> : CheckSelect<T, Prisma__UserMonitorClient<UserMonitor | null >, Prisma__UserMonitorClient<UserMonitorGetPayload<T> | null >>

    /**
     * Find the first UserMonitor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMonitorFindFirstArgs} args - Arguments to find a UserMonitor
     * @example
     * // Get one UserMonitor
     * const userMonitor = await prisma.userMonitor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserMonitorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserMonitorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserMonitor'> extends True ? CheckSelect<T, Prisma__UserMonitorClient<UserMonitor>, Prisma__UserMonitorClient<UserMonitorGetPayload<T>>> : CheckSelect<T, Prisma__UserMonitorClient<UserMonitor | null >, Prisma__UserMonitorClient<UserMonitorGetPayload<T> | null >>

    /**
     * Find zero or more UserMonitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMonitorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMonitors
     * const userMonitors = await prisma.userMonitor.findMany()
     * 
     * // Get first 10 UserMonitors
     * const userMonitors = await prisma.userMonitor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userMonitorWithIdOnly = await prisma.userMonitor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserMonitorFindManyArgs>(
      args?: SelectSubset<T, UserMonitorFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserMonitor>>, PrismaPromise<Array<UserMonitorGetPayload<T>>>>

    /**
     * Create a UserMonitor.
     * @param {UserMonitorCreateArgs} args - Arguments to create a UserMonitor.
     * @example
     * // Create one UserMonitor
     * const UserMonitor = await prisma.userMonitor.create({
     *   data: {
     *     // ... data to create a UserMonitor
     *   }
     * })
     * 
    **/
    create<T extends UserMonitorCreateArgs>(
      args: SelectSubset<T, UserMonitorCreateArgs>
    ): CheckSelect<T, Prisma__UserMonitorClient<UserMonitor>, Prisma__UserMonitorClient<UserMonitorGetPayload<T>>>

    /**
     * Create many UserMonitors.
     *     @param {UserMonitorCreateManyArgs} args - Arguments to create many UserMonitors.
     *     @example
     *     // Create many UserMonitors
     *     const userMonitor = await prisma.userMonitor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserMonitorCreateManyArgs>(
      args?: SelectSubset<T, UserMonitorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserMonitor.
     * @param {UserMonitorDeleteArgs} args - Arguments to delete one UserMonitor.
     * @example
     * // Delete one UserMonitor
     * const UserMonitor = await prisma.userMonitor.delete({
     *   where: {
     *     // ... filter to delete one UserMonitor
     *   }
     * })
     * 
    **/
    delete<T extends UserMonitorDeleteArgs>(
      args: SelectSubset<T, UserMonitorDeleteArgs>
    ): CheckSelect<T, Prisma__UserMonitorClient<UserMonitor>, Prisma__UserMonitorClient<UserMonitorGetPayload<T>>>

    /**
     * Update one UserMonitor.
     * @param {UserMonitorUpdateArgs} args - Arguments to update one UserMonitor.
     * @example
     * // Update one UserMonitor
     * const userMonitor = await prisma.userMonitor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserMonitorUpdateArgs>(
      args: SelectSubset<T, UserMonitorUpdateArgs>
    ): CheckSelect<T, Prisma__UserMonitorClient<UserMonitor>, Prisma__UserMonitorClient<UserMonitorGetPayload<T>>>

    /**
     * Delete zero or more UserMonitors.
     * @param {UserMonitorDeleteManyArgs} args - Arguments to filter UserMonitors to delete.
     * @example
     * // Delete a few UserMonitors
     * const { count } = await prisma.userMonitor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserMonitorDeleteManyArgs>(
      args?: SelectSubset<T, UserMonitorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMonitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMonitorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMonitors
     * const userMonitor = await prisma.userMonitor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserMonitorUpdateManyArgs>(
      args: SelectSubset<T, UserMonitorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserMonitor.
     * @param {UserMonitorUpsertArgs} args - Arguments to update or create a UserMonitor.
     * @example
     * // Update or create a UserMonitor
     * const userMonitor = await prisma.userMonitor.upsert({
     *   create: {
     *     // ... data to create a UserMonitor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMonitor we want to update
     *   }
     * })
    **/
    upsert<T extends UserMonitorUpsertArgs>(
      args: SelectSubset<T, UserMonitorUpsertArgs>
    ): CheckSelect<T, Prisma__UserMonitorClient<UserMonitor>, Prisma__UserMonitorClient<UserMonitorGetPayload<T>>>

    /**
     * Find one UserMonitor that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserMonitorFindUniqueOrThrowArgs} args - Arguments to find a UserMonitor
     * @example
     * // Get one UserMonitor
     * const userMonitor = await prisma.userMonitor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserMonitorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserMonitorFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserMonitorClient<UserMonitor>, Prisma__UserMonitorClient<UserMonitorGetPayload<T>>>

    /**
     * Find the first UserMonitor that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMonitorFindFirstOrThrowArgs} args - Arguments to find a UserMonitor
     * @example
     * // Get one UserMonitor
     * const userMonitor = await prisma.userMonitor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserMonitorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserMonitorFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserMonitorClient<UserMonitor>, Prisma__UserMonitorClient<UserMonitorGetPayload<T>>>

    /**
     * Count the number of UserMonitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMonitorCountArgs} args - Arguments to filter UserMonitors to count.
     * @example
     * // Count the number of UserMonitors
     * const count = await prisma.userMonitor.count({
     *   where: {
     *     // ... the filter for the UserMonitors we want to count
     *   }
     * })
    **/
    count<T extends UserMonitorCountArgs>(
      args?: Subset<T, UserMonitorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMonitorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMonitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMonitorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserMonitorAggregateArgs>(args: Subset<T, UserMonitorAggregateArgs>): PrismaPromise<GetUserMonitorAggregateType<T>>

    /**
     * Group by UserMonitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMonitorGroupByArgs} args - Group by arguments.
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
      T extends UserMonitorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMonitorGroupByArgs['orderBy'] }
        : { orderBy?: UserMonitorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserMonitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMonitorGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMonitor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserMonitorClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    toEmails<T extends EmailFindManyArgs = {}>(args?: Subset<T, EmailFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Email>>, PrismaPromise<Array<EmailGetPayload<T>>>>;

    fromEmails<T extends EmailFindManyArgs = {}>(args?: Subset<T, EmailFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Email>>, PrismaPromise<Array<EmailGetPayload<T>>>>;

    toSlack<T extends SlackFindManyArgs = {}>(args?: Subset<T, SlackFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Slack>>, PrismaPromise<Array<SlackGetPayload<T>>>>;

    fromSlack<T extends SlackFindManyArgs = {}>(args?: Subset<T, SlackFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Slack>>, PrismaPromise<Array<SlackGetPayload<T>>>>;

    Project<T extends ProjectFindManyArgs = {}>(args?: Subset<T, ProjectFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Project>>, PrismaPromise<Array<ProjectGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserMonitor base type for findUnique actions
   */
  export type UserMonitorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserMonitor
     * 
    **/
    select?: UserMonitorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMonitorInclude | null
    /**
     * Filter, which UserMonitor to fetch.
     * 
    **/
    where: UserMonitorWhereUniqueInput
  }

  /**
   * UserMonitor: findUnique
   */
  export interface UserMonitorFindUniqueArgs extends UserMonitorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserMonitor base type for findFirst actions
   */
  export type UserMonitorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserMonitor
     * 
    **/
    select?: UserMonitorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMonitorInclude | null
    /**
     * Filter, which UserMonitor to fetch.
     * 
    **/
    where?: UserMonitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMonitors to fetch.
     * 
    **/
    orderBy?: Enumerable<UserMonitorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMonitors.
     * 
    **/
    cursor?: UserMonitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMonitors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMonitors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMonitors.
     * 
    **/
    distinct?: Enumerable<UserMonitorScalarFieldEnum>
  }

  /**
   * UserMonitor: findFirst
   */
  export interface UserMonitorFindFirstArgs extends UserMonitorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserMonitor findMany
   */
  export type UserMonitorFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserMonitor
     * 
    **/
    select?: UserMonitorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMonitorInclude | null
    /**
     * Filter, which UserMonitors to fetch.
     * 
    **/
    where?: UserMonitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMonitors to fetch.
     * 
    **/
    orderBy?: Enumerable<UserMonitorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMonitors.
     * 
    **/
    cursor?: UserMonitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMonitors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMonitors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserMonitorScalarFieldEnum>
  }


  /**
   * UserMonitor create
   */
  export type UserMonitorCreateArgs = {
    /**
     * Select specific fields to fetch from the UserMonitor
     * 
    **/
    select?: UserMonitorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMonitorInclude | null
    /**
     * The data needed to create a UserMonitor.
     * 
    **/
    data: XOR<UserMonitorCreateInput, UserMonitorUncheckedCreateInput>
  }


  /**
   * UserMonitor createMany
   */
  export type UserMonitorCreateManyArgs = {
    /**
     * The data used to create many UserMonitors.
     * 
    **/
    data: Enumerable<UserMonitorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserMonitor update
   */
  export type UserMonitorUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserMonitor
     * 
    **/
    select?: UserMonitorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMonitorInclude | null
    /**
     * The data needed to update a UserMonitor.
     * 
    **/
    data: XOR<UserMonitorUpdateInput, UserMonitorUncheckedUpdateInput>
    /**
     * Choose, which UserMonitor to update.
     * 
    **/
    where: UserMonitorWhereUniqueInput
  }


  /**
   * UserMonitor updateMany
   */
  export type UserMonitorUpdateManyArgs = {
    /**
     * The data used to update UserMonitors.
     * 
    **/
    data: XOR<UserMonitorUpdateManyMutationInput, UserMonitorUncheckedUpdateManyInput>
    /**
     * Filter which UserMonitors to update
     * 
    **/
    where?: UserMonitorWhereInput
  }


  /**
   * UserMonitor upsert
   */
  export type UserMonitorUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserMonitor
     * 
    **/
    select?: UserMonitorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMonitorInclude | null
    /**
     * The filter to search for the UserMonitor to update in case it exists.
     * 
    **/
    where: UserMonitorWhereUniqueInput
    /**
     * In case the UserMonitor found by the `where` argument doesn't exist, create a new UserMonitor with this data.
     * 
    **/
    create: XOR<UserMonitorCreateInput, UserMonitorUncheckedCreateInput>
    /**
     * In case the UserMonitor was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserMonitorUpdateInput, UserMonitorUncheckedUpdateInput>
  }


  /**
   * UserMonitor delete
   */
  export type UserMonitorDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserMonitor
     * 
    **/
    select?: UserMonitorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMonitorInclude | null
    /**
     * Filter which UserMonitor to delete.
     * 
    **/
    where: UserMonitorWhereUniqueInput
  }


  /**
   * UserMonitor deleteMany
   */
  export type UserMonitorDeleteManyArgs = {
    /**
     * Filter which UserMonitors to delete
     * 
    **/
    where?: UserMonitorWhereInput
  }


  /**
   * UserMonitor: findUniqueOrThrow
   */
  export type UserMonitorFindUniqueOrThrowArgs = UserMonitorFindUniqueArgsBase
      

  /**
   * UserMonitor: findFirstOrThrow
   */
  export type UserMonitorFindFirstOrThrowArgs = UserMonitorFindFirstArgsBase
      

  /**
   * UserMonitor without action
   */
  export type UserMonitorArgs = {
    /**
     * Select specific fields to fetch from the UserMonitor
     * 
    **/
    select?: UserMonitorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserMonitorInclude | null
  }



  /**
   * Model Email
   */


  export type AggregateEmail = {
    _count: EmailCountAggregateOutputType | null
    _avg: EmailAvgAggregateOutputType | null
    _sum: EmailSumAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  export type EmailAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    score: number | null
    magnitude: number | null
  }

  export type EmailSumAggregateOutputType = {
    id: number | null
    userId: number | null
    score: number | null
    magnitude: number | null
  }

  export type EmailMinAggregateOutputType = {
    id: number | null
    channel: string | null
    userId: number | null
    date: Date | null
    created: Date | null
    score: number | null
    magnitude: number | null
  }

  export type EmailMaxAggregateOutputType = {
    id: number | null
    channel: string | null
    userId: number | null
    date: Date | null
    created: Date | null
    score: number | null
    magnitude: number | null
  }

  export type EmailCountAggregateOutputType = {
    id: number
    channel: number
    userId: number
    date: number
    created: number
    score: number
    magnitude: number
    _all: number
  }


  export type EmailAvgAggregateInputType = {
    id?: true
    userId?: true
    score?: true
    magnitude?: true
  }

  export type EmailSumAggregateInputType = {
    id?: true
    userId?: true
    score?: true
    magnitude?: true
  }

  export type EmailMinAggregateInputType = {
    id?: true
    channel?: true
    userId?: true
    date?: true
    created?: true
    score?: true
    magnitude?: true
  }

  export type EmailMaxAggregateInputType = {
    id?: true
    channel?: true
    userId?: true
    date?: true
    created?: true
    score?: true
    magnitude?: true
  }

  export type EmailCountAggregateInputType = {
    id?: true
    channel?: true
    userId?: true
    date?: true
    created?: true
    score?: true
    magnitude?: true
    _all?: true
  }

  export type EmailAggregateArgs = {
    /**
     * Filter which Email to aggregate.
     * 
    **/
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     * 
    **/
    orderBy?: Enumerable<EmailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emails
    **/
    _count?: true | EmailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailMaxAggregateInputType
  }

  export type GetEmailAggregateType<T extends EmailAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail[P]>
      : GetScalarType<T[P], AggregateEmail[P]>
  }




  export type EmailGroupByArgs = {
    where?: EmailWhereInput
    orderBy?: Enumerable<EmailOrderByWithAggregationInput>
    by: Array<EmailScalarFieldEnum>
    having?: EmailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailCountAggregateInputType | true
    _avg?: EmailAvgAggregateInputType
    _sum?: EmailSumAggregateInputType
    _min?: EmailMinAggregateInputType
    _max?: EmailMaxAggregateInputType
  }


  export type EmailGroupByOutputType = {
    id: number
    channel: string | null
    userId: number
    date: Date
    created: Date
    score: number
    magnitude: number
    _count: EmailCountAggregateOutputType | null
    _avg: EmailAvgAggregateOutputType | null
    _sum: EmailSumAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  type GetEmailGroupByPayload<T extends EmailGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EmailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailGroupByOutputType[P]>
            : GetScalarType<T[P], EmailGroupByOutputType[P]>
        }
      >
    >


  export type EmailSelect = {
    id?: boolean
    channel?: boolean
    to?: boolean | UserMonitorFindManyArgs
    from?: boolean | UserMonitorArgs
    userId?: boolean
    date?: boolean
    created?: boolean
    score?: boolean
    magnitude?: boolean
    Project?: boolean | ProjectFindManyArgs
    _count?: boolean | EmailCountOutputTypeArgs
  }

  export type EmailInclude = {
    to?: boolean | UserMonitorFindManyArgs
    from?: boolean | UserMonitorArgs
    Project?: boolean | ProjectFindManyArgs
    _count?: boolean | EmailCountOutputTypeArgs
  }

  export type EmailGetPayload<
    S extends boolean | null | undefined | EmailArgs,
    U = keyof S
      > = S extends true
        ? Email
    : S extends undefined
    ? never
    : S extends EmailArgs | EmailFindManyArgs
    ?'include' extends U
    ? Email  & {
    [P in TrueKeys<S['include']>]:
        P extends 'to' ? Array < UserMonitorGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'from' ? UserMonitorGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'Project' ? Array < ProjectGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? EmailCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'to' ? Array < UserMonitorGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'from' ? UserMonitorGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'Project' ? Array < ProjectGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? EmailCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Email ? Email[P] : never
  } 
    : Email
  : Email


  type EmailCountArgs = Merge<
    Omit<EmailFindManyArgs, 'select' | 'include'> & {
      select?: EmailCountAggregateInputType | true
    }
  >

  export interface EmailDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Email that matches the filter.
     * @param {EmailFindUniqueArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmailFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EmailFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Email'> extends True ? CheckSelect<T, Prisma__EmailClient<Email>, Prisma__EmailClient<EmailGetPayload<T>>> : CheckSelect<T, Prisma__EmailClient<Email | null >, Prisma__EmailClient<EmailGetPayload<T> | null >>

    /**
     * Find the first Email that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindFirstArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmailFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EmailFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Email'> extends True ? CheckSelect<T, Prisma__EmailClient<Email>, Prisma__EmailClient<EmailGetPayload<T>>> : CheckSelect<T, Prisma__EmailClient<Email | null >, Prisma__EmailClient<EmailGetPayload<T> | null >>

    /**
     * Find zero or more Emails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emails
     * const emails = await prisma.email.findMany()
     * 
     * // Get first 10 Emails
     * const emails = await prisma.email.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailWithIdOnly = await prisma.email.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EmailFindManyArgs>(
      args?: SelectSubset<T, EmailFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Email>>, PrismaPromise<Array<EmailGetPayload<T>>>>

    /**
     * Create a Email.
     * @param {EmailCreateArgs} args - Arguments to create a Email.
     * @example
     * // Create one Email
     * const Email = await prisma.email.create({
     *   data: {
     *     // ... data to create a Email
     *   }
     * })
     * 
    **/
    create<T extends EmailCreateArgs>(
      args: SelectSubset<T, EmailCreateArgs>
    ): CheckSelect<T, Prisma__EmailClient<Email>, Prisma__EmailClient<EmailGetPayload<T>>>

    /**
     * Create many Emails.
     *     @param {EmailCreateManyArgs} args - Arguments to create many Emails.
     *     @example
     *     // Create many Emails
     *     const email = await prisma.email.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmailCreateManyArgs>(
      args?: SelectSubset<T, EmailCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Email.
     * @param {EmailDeleteArgs} args - Arguments to delete one Email.
     * @example
     * // Delete one Email
     * const Email = await prisma.email.delete({
     *   where: {
     *     // ... filter to delete one Email
     *   }
     * })
     * 
    **/
    delete<T extends EmailDeleteArgs>(
      args: SelectSubset<T, EmailDeleteArgs>
    ): CheckSelect<T, Prisma__EmailClient<Email>, Prisma__EmailClient<EmailGetPayload<T>>>

    /**
     * Update one Email.
     * @param {EmailUpdateArgs} args - Arguments to update one Email.
     * @example
     * // Update one Email
     * const email = await prisma.email.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmailUpdateArgs>(
      args: SelectSubset<T, EmailUpdateArgs>
    ): CheckSelect<T, Prisma__EmailClient<Email>, Prisma__EmailClient<EmailGetPayload<T>>>

    /**
     * Delete zero or more Emails.
     * @param {EmailDeleteManyArgs} args - Arguments to filter Emails to delete.
     * @example
     * // Delete a few Emails
     * const { count } = await prisma.email.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmailDeleteManyArgs>(
      args?: SelectSubset<T, EmailDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emails
     * const email = await prisma.email.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmailUpdateManyArgs>(
      args: SelectSubset<T, EmailUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Email.
     * @param {EmailUpsertArgs} args - Arguments to update or create a Email.
     * @example
     * // Update or create a Email
     * const email = await prisma.email.upsert({
     *   create: {
     *     // ... data to create a Email
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email we want to update
     *   }
     * })
    **/
    upsert<T extends EmailUpsertArgs>(
      args: SelectSubset<T, EmailUpsertArgs>
    ): CheckSelect<T, Prisma__EmailClient<Email>, Prisma__EmailClient<EmailGetPayload<T>>>

    /**
     * Find one Email that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {EmailFindUniqueOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EmailFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, EmailFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__EmailClient<Email>, Prisma__EmailClient<EmailGetPayload<T>>>

    /**
     * Find the first Email that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindFirstOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EmailFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EmailFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__EmailClient<Email>, Prisma__EmailClient<EmailGetPayload<T>>>

    /**
     * Count the number of Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailCountArgs} args - Arguments to filter Emails to count.
     * @example
     * // Count the number of Emails
     * const count = await prisma.email.count({
     *   where: {
     *     // ... the filter for the Emails we want to count
     *   }
     * })
    **/
    count<T extends EmailCountArgs>(
      args?: Subset<T, EmailCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailAggregateArgs>(args: Subset<T, EmailAggregateArgs>): PrismaPromise<GetEmailAggregateType<T>>

    /**
     * Group by Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailGroupByArgs} args - Group by arguments.
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
      T extends EmailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailGroupByArgs['orderBy'] }
        : { orderBy?: EmailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EmailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Email.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EmailClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    to<T extends UserMonitorFindManyArgs = {}>(args?: Subset<T, UserMonitorFindManyArgs>): CheckSelect<T, PrismaPromise<Array<UserMonitor>>, PrismaPromise<Array<UserMonitorGetPayload<T>>>>;

    from<T extends UserMonitorArgs = {}>(args?: Subset<T, UserMonitorArgs>): CheckSelect<T, Prisma__UserMonitorClient<UserMonitor | null >, Prisma__UserMonitorClient<UserMonitorGetPayload<T> | null >>;

    Project<T extends ProjectFindManyArgs = {}>(args?: Subset<T, ProjectFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Project>>, PrismaPromise<Array<ProjectGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Email base type for findUnique actions
   */
  export type EmailFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Email
     * 
    **/
    select?: EmailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmailInclude | null
    /**
     * Filter, which Email to fetch.
     * 
    **/
    where: EmailWhereUniqueInput
  }

  /**
   * Email: findUnique
   */
  export interface EmailFindUniqueArgs extends EmailFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Email base type for findFirst actions
   */
  export type EmailFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Email
     * 
    **/
    select?: EmailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmailInclude | null
    /**
     * Filter, which Email to fetch.
     * 
    **/
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     * 
    **/
    orderBy?: Enumerable<EmailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emails.
     * 
    **/
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emails.
     * 
    **/
    distinct?: Enumerable<EmailScalarFieldEnum>
  }

  /**
   * Email: findFirst
   */
  export interface EmailFindFirstArgs extends EmailFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Email findMany
   */
  export type EmailFindManyArgs = {
    /**
     * Select specific fields to fetch from the Email
     * 
    **/
    select?: EmailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmailInclude | null
    /**
     * Filter, which Emails to fetch.
     * 
    **/
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     * 
    **/
    orderBy?: Enumerable<EmailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emails.
     * 
    **/
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EmailScalarFieldEnum>
  }


  /**
   * Email create
   */
  export type EmailCreateArgs = {
    /**
     * Select specific fields to fetch from the Email
     * 
    **/
    select?: EmailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmailInclude | null
    /**
     * The data needed to create a Email.
     * 
    **/
    data: XOR<EmailCreateInput, EmailUncheckedCreateInput>
  }


  /**
   * Email createMany
   */
  export type EmailCreateManyArgs = {
    /**
     * The data used to create many Emails.
     * 
    **/
    data: Enumerable<EmailCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Email update
   */
  export type EmailUpdateArgs = {
    /**
     * Select specific fields to fetch from the Email
     * 
    **/
    select?: EmailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmailInclude | null
    /**
     * The data needed to update a Email.
     * 
    **/
    data: XOR<EmailUpdateInput, EmailUncheckedUpdateInput>
    /**
     * Choose, which Email to update.
     * 
    **/
    where: EmailWhereUniqueInput
  }


  /**
   * Email updateMany
   */
  export type EmailUpdateManyArgs = {
    /**
     * The data used to update Emails.
     * 
    **/
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyInput>
    /**
     * Filter which Emails to update
     * 
    **/
    where?: EmailWhereInput
  }


  /**
   * Email upsert
   */
  export type EmailUpsertArgs = {
    /**
     * Select specific fields to fetch from the Email
     * 
    **/
    select?: EmailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmailInclude | null
    /**
     * The filter to search for the Email to update in case it exists.
     * 
    **/
    where: EmailWhereUniqueInput
    /**
     * In case the Email found by the `where` argument doesn't exist, create a new Email with this data.
     * 
    **/
    create: XOR<EmailCreateInput, EmailUncheckedCreateInput>
    /**
     * In case the Email was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EmailUpdateInput, EmailUncheckedUpdateInput>
  }


  /**
   * Email delete
   */
  export type EmailDeleteArgs = {
    /**
     * Select specific fields to fetch from the Email
     * 
    **/
    select?: EmailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmailInclude | null
    /**
     * Filter which Email to delete.
     * 
    **/
    where: EmailWhereUniqueInput
  }


  /**
   * Email deleteMany
   */
  export type EmailDeleteManyArgs = {
    /**
     * Filter which Emails to delete
     * 
    **/
    where?: EmailWhereInput
  }


  /**
   * Email: findUniqueOrThrow
   */
  export type EmailFindUniqueOrThrowArgs = EmailFindUniqueArgsBase
      

  /**
   * Email: findFirstOrThrow
   */
  export type EmailFindFirstOrThrowArgs = EmailFindFirstArgsBase
      

  /**
   * Email without action
   */
  export type EmailArgs = {
    /**
     * Select specific fields to fetch from the Email
     * 
    **/
    select?: EmailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmailInclude | null
  }



  /**
   * Model Slack
   */


  export type AggregateSlack = {
    _count: SlackCountAggregateOutputType | null
    _avg: SlackAvgAggregateOutputType | null
    _sum: SlackSumAggregateOutputType | null
    _min: SlackMinAggregateOutputType | null
    _max: SlackMaxAggregateOutputType | null
  }

  export type SlackAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    score: number | null
    magnitude: number | null
  }

  export type SlackSumAggregateOutputType = {
    id: number | null
    userId: number | null
    score: number | null
    magnitude: number | null
  }

  export type SlackMinAggregateOutputType = {
    id: number | null
    channel: string | null
    userId: number | null
    date: Date | null
    created: Date | null
    score: number | null
    magnitude: number | null
  }

  export type SlackMaxAggregateOutputType = {
    id: number | null
    channel: string | null
    userId: number | null
    date: Date | null
    created: Date | null
    score: number | null
    magnitude: number | null
  }

  export type SlackCountAggregateOutputType = {
    id: number
    channel: number
    userId: number
    date: number
    created: number
    score: number
    magnitude: number
    _all: number
  }


  export type SlackAvgAggregateInputType = {
    id?: true
    userId?: true
    score?: true
    magnitude?: true
  }

  export type SlackSumAggregateInputType = {
    id?: true
    userId?: true
    score?: true
    magnitude?: true
  }

  export type SlackMinAggregateInputType = {
    id?: true
    channel?: true
    userId?: true
    date?: true
    created?: true
    score?: true
    magnitude?: true
  }

  export type SlackMaxAggregateInputType = {
    id?: true
    channel?: true
    userId?: true
    date?: true
    created?: true
    score?: true
    magnitude?: true
  }

  export type SlackCountAggregateInputType = {
    id?: true
    channel?: true
    userId?: true
    date?: true
    created?: true
    score?: true
    magnitude?: true
    _all?: true
  }

  export type SlackAggregateArgs = {
    /**
     * Filter which Slack to aggregate.
     * 
    **/
    where?: SlackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slacks to fetch.
     * 
    **/
    orderBy?: Enumerable<SlackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SlackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slacks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slacks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Slacks
    **/
    _count?: true | SlackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SlackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SlackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlackMaxAggregateInputType
  }

  export type GetSlackAggregateType<T extends SlackAggregateArgs> = {
        [P in keyof T & keyof AggregateSlack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlack[P]>
      : GetScalarType<T[P], AggregateSlack[P]>
  }




  export type SlackGroupByArgs = {
    where?: SlackWhereInput
    orderBy?: Enumerable<SlackOrderByWithAggregationInput>
    by: Array<SlackScalarFieldEnum>
    having?: SlackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlackCountAggregateInputType | true
    _avg?: SlackAvgAggregateInputType
    _sum?: SlackSumAggregateInputType
    _min?: SlackMinAggregateInputType
    _max?: SlackMaxAggregateInputType
  }


  export type SlackGroupByOutputType = {
    id: number
    channel: string | null
    userId: number
    date: Date
    created: Date
    score: number
    magnitude: number
    _count: SlackCountAggregateOutputType | null
    _avg: SlackAvgAggregateOutputType | null
    _sum: SlackSumAggregateOutputType | null
    _min: SlackMinAggregateOutputType | null
    _max: SlackMaxAggregateOutputType | null
  }

  type GetSlackGroupByPayload<T extends SlackGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SlackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlackGroupByOutputType[P]>
            : GetScalarType<T[P], SlackGroupByOutputType[P]>
        }
      >
    >


  export type SlackSelect = {
    id?: boolean
    to?: boolean | UserMonitorFindManyArgs
    from?: boolean | UserMonitorArgs
    channel?: boolean
    userId?: boolean
    date?: boolean
    created?: boolean
    score?: boolean
    magnitude?: boolean
    Project?: boolean | ProjectFindManyArgs
    _count?: boolean | SlackCountOutputTypeArgs
  }

  export type SlackInclude = {
    to?: boolean | UserMonitorFindManyArgs
    from?: boolean | UserMonitorArgs
    Project?: boolean | ProjectFindManyArgs
    _count?: boolean | SlackCountOutputTypeArgs
  }

  export type SlackGetPayload<
    S extends boolean | null | undefined | SlackArgs,
    U = keyof S
      > = S extends true
        ? Slack
    : S extends undefined
    ? never
    : S extends SlackArgs | SlackFindManyArgs
    ?'include' extends U
    ? Slack  & {
    [P in TrueKeys<S['include']>]:
        P extends 'to' ? Array < UserMonitorGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'from' ? UserMonitorGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'Project' ? Array < ProjectGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? SlackCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'to' ? Array < UserMonitorGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'from' ? UserMonitorGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'Project' ? Array < ProjectGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? SlackCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Slack ? Slack[P] : never
  } 
    : Slack
  : Slack


  type SlackCountArgs = Merge<
    Omit<SlackFindManyArgs, 'select' | 'include'> & {
      select?: SlackCountAggregateInputType | true
    }
  >

  export interface SlackDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Slack that matches the filter.
     * @param {SlackFindUniqueArgs} args - Arguments to find a Slack
     * @example
     * // Get one Slack
     * const slack = await prisma.slack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SlackFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SlackFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Slack'> extends True ? CheckSelect<T, Prisma__SlackClient<Slack>, Prisma__SlackClient<SlackGetPayload<T>>> : CheckSelect<T, Prisma__SlackClient<Slack | null >, Prisma__SlackClient<SlackGetPayload<T> | null >>

    /**
     * Find the first Slack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlackFindFirstArgs} args - Arguments to find a Slack
     * @example
     * // Get one Slack
     * const slack = await prisma.slack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SlackFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SlackFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Slack'> extends True ? CheckSelect<T, Prisma__SlackClient<Slack>, Prisma__SlackClient<SlackGetPayload<T>>> : CheckSelect<T, Prisma__SlackClient<Slack | null >, Prisma__SlackClient<SlackGetPayload<T> | null >>

    /**
     * Find zero or more Slacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlackFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Slacks
     * const slacks = await prisma.slack.findMany()
     * 
     * // Get first 10 Slacks
     * const slacks = await prisma.slack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slackWithIdOnly = await prisma.slack.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SlackFindManyArgs>(
      args?: SelectSubset<T, SlackFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Slack>>, PrismaPromise<Array<SlackGetPayload<T>>>>

    /**
     * Create a Slack.
     * @param {SlackCreateArgs} args - Arguments to create a Slack.
     * @example
     * // Create one Slack
     * const Slack = await prisma.slack.create({
     *   data: {
     *     // ... data to create a Slack
     *   }
     * })
     * 
    **/
    create<T extends SlackCreateArgs>(
      args: SelectSubset<T, SlackCreateArgs>
    ): CheckSelect<T, Prisma__SlackClient<Slack>, Prisma__SlackClient<SlackGetPayload<T>>>

    /**
     * Create many Slacks.
     *     @param {SlackCreateManyArgs} args - Arguments to create many Slacks.
     *     @example
     *     // Create many Slacks
     *     const slack = await prisma.slack.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SlackCreateManyArgs>(
      args?: SelectSubset<T, SlackCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Slack.
     * @param {SlackDeleteArgs} args - Arguments to delete one Slack.
     * @example
     * // Delete one Slack
     * const Slack = await prisma.slack.delete({
     *   where: {
     *     // ... filter to delete one Slack
     *   }
     * })
     * 
    **/
    delete<T extends SlackDeleteArgs>(
      args: SelectSubset<T, SlackDeleteArgs>
    ): CheckSelect<T, Prisma__SlackClient<Slack>, Prisma__SlackClient<SlackGetPayload<T>>>

    /**
     * Update one Slack.
     * @param {SlackUpdateArgs} args - Arguments to update one Slack.
     * @example
     * // Update one Slack
     * const slack = await prisma.slack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SlackUpdateArgs>(
      args: SelectSubset<T, SlackUpdateArgs>
    ): CheckSelect<T, Prisma__SlackClient<Slack>, Prisma__SlackClient<SlackGetPayload<T>>>

    /**
     * Delete zero or more Slacks.
     * @param {SlackDeleteManyArgs} args - Arguments to filter Slacks to delete.
     * @example
     * // Delete a few Slacks
     * const { count } = await prisma.slack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SlackDeleteManyArgs>(
      args?: SelectSubset<T, SlackDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Slacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Slacks
     * const slack = await prisma.slack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SlackUpdateManyArgs>(
      args: SelectSubset<T, SlackUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Slack.
     * @param {SlackUpsertArgs} args - Arguments to update or create a Slack.
     * @example
     * // Update or create a Slack
     * const slack = await prisma.slack.upsert({
     *   create: {
     *     // ... data to create a Slack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Slack we want to update
     *   }
     * })
    **/
    upsert<T extends SlackUpsertArgs>(
      args: SelectSubset<T, SlackUpsertArgs>
    ): CheckSelect<T, Prisma__SlackClient<Slack>, Prisma__SlackClient<SlackGetPayload<T>>>

    /**
     * Find one Slack that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SlackFindUniqueOrThrowArgs} args - Arguments to find a Slack
     * @example
     * // Get one Slack
     * const slack = await prisma.slack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SlackFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SlackFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SlackClient<Slack>, Prisma__SlackClient<SlackGetPayload<T>>>

    /**
     * Find the first Slack that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlackFindFirstOrThrowArgs} args - Arguments to find a Slack
     * @example
     * // Get one Slack
     * const slack = await prisma.slack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SlackFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SlackFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SlackClient<Slack>, Prisma__SlackClient<SlackGetPayload<T>>>

    /**
     * Count the number of Slacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlackCountArgs} args - Arguments to filter Slacks to count.
     * @example
     * // Count the number of Slacks
     * const count = await prisma.slack.count({
     *   where: {
     *     // ... the filter for the Slacks we want to count
     *   }
     * })
    **/
    count<T extends SlackCountArgs>(
      args?: Subset<T, SlackCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Slack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SlackAggregateArgs>(args: Subset<T, SlackAggregateArgs>): PrismaPromise<GetSlackAggregateType<T>>

    /**
     * Group by Slack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlackGroupByArgs} args - Group by arguments.
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
      T extends SlackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlackGroupByArgs['orderBy'] }
        : { orderBy?: SlackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SlackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlackGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Slack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SlackClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    to<T extends UserMonitorFindManyArgs = {}>(args?: Subset<T, UserMonitorFindManyArgs>): CheckSelect<T, PrismaPromise<Array<UserMonitor>>, PrismaPromise<Array<UserMonitorGetPayload<T>>>>;

    from<T extends UserMonitorArgs = {}>(args?: Subset<T, UserMonitorArgs>): CheckSelect<T, Prisma__UserMonitorClient<UserMonitor | null >, Prisma__UserMonitorClient<UserMonitorGetPayload<T> | null >>;

    Project<T extends ProjectFindManyArgs = {}>(args?: Subset<T, ProjectFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Project>>, PrismaPromise<Array<ProjectGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Slack base type for findUnique actions
   */
  export type SlackFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Slack
     * 
    **/
    select?: SlackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SlackInclude | null
    /**
     * Filter, which Slack to fetch.
     * 
    **/
    where: SlackWhereUniqueInput
  }

  /**
   * Slack: findUnique
   */
  export interface SlackFindUniqueArgs extends SlackFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Slack base type for findFirst actions
   */
  export type SlackFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Slack
     * 
    **/
    select?: SlackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SlackInclude | null
    /**
     * Filter, which Slack to fetch.
     * 
    **/
    where?: SlackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slacks to fetch.
     * 
    **/
    orderBy?: Enumerable<SlackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Slacks.
     * 
    **/
    cursor?: SlackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slacks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slacks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Slacks.
     * 
    **/
    distinct?: Enumerable<SlackScalarFieldEnum>
  }

  /**
   * Slack: findFirst
   */
  export interface SlackFindFirstArgs extends SlackFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Slack findMany
   */
  export type SlackFindManyArgs = {
    /**
     * Select specific fields to fetch from the Slack
     * 
    **/
    select?: SlackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SlackInclude | null
    /**
     * Filter, which Slacks to fetch.
     * 
    **/
    where?: SlackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slacks to fetch.
     * 
    **/
    orderBy?: Enumerable<SlackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Slacks.
     * 
    **/
    cursor?: SlackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slacks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slacks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SlackScalarFieldEnum>
  }


  /**
   * Slack create
   */
  export type SlackCreateArgs = {
    /**
     * Select specific fields to fetch from the Slack
     * 
    **/
    select?: SlackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SlackInclude | null
    /**
     * The data needed to create a Slack.
     * 
    **/
    data: XOR<SlackCreateInput, SlackUncheckedCreateInput>
  }


  /**
   * Slack createMany
   */
  export type SlackCreateManyArgs = {
    /**
     * The data used to create many Slacks.
     * 
    **/
    data: Enumerable<SlackCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Slack update
   */
  export type SlackUpdateArgs = {
    /**
     * Select specific fields to fetch from the Slack
     * 
    **/
    select?: SlackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SlackInclude | null
    /**
     * The data needed to update a Slack.
     * 
    **/
    data: XOR<SlackUpdateInput, SlackUncheckedUpdateInput>
    /**
     * Choose, which Slack to update.
     * 
    **/
    where: SlackWhereUniqueInput
  }


  /**
   * Slack updateMany
   */
  export type SlackUpdateManyArgs = {
    /**
     * The data used to update Slacks.
     * 
    **/
    data: XOR<SlackUpdateManyMutationInput, SlackUncheckedUpdateManyInput>
    /**
     * Filter which Slacks to update
     * 
    **/
    where?: SlackWhereInput
  }


  /**
   * Slack upsert
   */
  export type SlackUpsertArgs = {
    /**
     * Select specific fields to fetch from the Slack
     * 
    **/
    select?: SlackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SlackInclude | null
    /**
     * The filter to search for the Slack to update in case it exists.
     * 
    **/
    where: SlackWhereUniqueInput
    /**
     * In case the Slack found by the `where` argument doesn't exist, create a new Slack with this data.
     * 
    **/
    create: XOR<SlackCreateInput, SlackUncheckedCreateInput>
    /**
     * In case the Slack was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SlackUpdateInput, SlackUncheckedUpdateInput>
  }


  /**
   * Slack delete
   */
  export type SlackDeleteArgs = {
    /**
     * Select specific fields to fetch from the Slack
     * 
    **/
    select?: SlackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SlackInclude | null
    /**
     * Filter which Slack to delete.
     * 
    **/
    where: SlackWhereUniqueInput
  }


  /**
   * Slack deleteMany
   */
  export type SlackDeleteManyArgs = {
    /**
     * Filter which Slacks to delete
     * 
    **/
    where?: SlackWhereInput
  }


  /**
   * Slack: findUniqueOrThrow
   */
  export type SlackFindUniqueOrThrowArgs = SlackFindUniqueArgsBase
      

  /**
   * Slack: findFirstOrThrow
   */
  export type SlackFindFirstOrThrowArgs = SlackFindFirstArgsBase
      

  /**
   * Slack without action
   */
  export type SlackArgs = {
    /**
     * Select specific fields to fetch from the Slack
     * 
    **/
    select?: SlackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SlackInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const EmailScalarFieldEnum: {
    id: 'id',
    channel: 'channel',
    userId: 'userId',
    date: 'date',
    created: 'created',
    score: 'score',
    magnitude: 'magnitude'
  };

  export type EmailScalarFieldEnum = (typeof EmailScalarFieldEnum)[keyof typeof EmailScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    date: 'date',
    name: 'name',
    elasticIndex: 'elasticIndex',
    userId: 'userId',
    emailId: 'emailId',
    slackId: 'slackId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SlackScalarFieldEnum: {
    id: 'id',
    channel: 'channel',
    userId: 'userId',
    date: 'date',
    created: 'created',
    score: 'score',
    magnitude: 'magnitude'
  };

  export type SlackScalarFieldEnum = (typeof SlackScalarFieldEnum)[keyof typeof SlackScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserMonitorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    slack: 'slack',
    date: 'date'
  };

  export type UserMonitorScalarFieldEnum = (typeof UserMonitorScalarFieldEnum)[keyof typeof UserMonitorScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    date: 'date',
    name: 'name',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    date?: DateTimeFilter | Date | string
    name?: StringFilter | string
    email?: StringFilter | string
    Project?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    email?: SortOrder
    Project?: ProjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
  }

  export type ProjectWhereInput = {
    AND?: Enumerable<ProjectWhereInput>
    OR?: Enumerable<ProjectWhereInput>
    NOT?: Enumerable<ProjectWhereInput>
    id?: IntFilter | number
    date?: DateTimeFilter | Date | string
    name?: StringFilter | string
    elasticIndex?: StringFilter | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    monitors?: UserMonitorListRelationFilter
    userId?: IntFilter | number
    Email?: XOR<EmailRelationFilter, EmailWhereInput> | null
    emailId?: IntNullableFilter | number | null
    Slack?: XOR<SlackRelationFilter, SlackWhereInput> | null
    slackId?: IntNullableFilter | number | null
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    elasticIndex?: SortOrder
    owner?: UserOrderByWithRelationInput
    monitors?: UserMonitorOrderByRelationAggregateInput
    userId?: SortOrder
    Email?: EmailOrderByWithRelationInput
    emailId?: SortOrder
    Slack?: SlackOrderByWithRelationInput
    slackId?: SortOrder
  }

  export type ProjectWhereUniqueInput = {
    id?: number
  }

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    elasticIndex?: SortOrder
    userId?: SortOrder
    emailId?: SortOrder
    slackId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProjectScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    elasticIndex?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
    emailId?: IntNullableWithAggregatesFilter | number | null
    slackId?: IntNullableWithAggregatesFilter | number | null
  }

  export type UserMonitorWhereInput = {
    AND?: Enumerable<UserMonitorWhereInput>
    OR?: Enumerable<UserMonitorWhereInput>
    NOT?: Enumerable<UserMonitorWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    slack?: StringNullableFilter | string | null
    date?: DateTimeFilter | Date | string
    toEmails?: EmailListRelationFilter
    fromEmails?: EmailListRelationFilter
    toSlack?: SlackListRelationFilter
    fromSlack?: SlackListRelationFilter
    Project?: ProjectListRelationFilter
  }

  export type UserMonitorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    slack?: SortOrder
    date?: SortOrder
    toEmails?: EmailOrderByRelationAggregateInput
    fromEmails?: EmailOrderByRelationAggregateInput
    toSlack?: SlackOrderByRelationAggregateInput
    fromSlack?: SlackOrderByRelationAggregateInput
    Project?: ProjectOrderByRelationAggregateInput
  }

  export type UserMonitorWhereUniqueInput = {
    id?: number
  }

  export type UserMonitorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    slack?: SortOrder
    date?: SortOrder
    _count?: UserMonitorCountOrderByAggregateInput
    _avg?: UserMonitorAvgOrderByAggregateInput
    _max?: UserMonitorMaxOrderByAggregateInput
    _min?: UserMonitorMinOrderByAggregateInput
    _sum?: UserMonitorSumOrderByAggregateInput
  }

  export type UserMonitorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserMonitorScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserMonitorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserMonitorScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    slack?: StringNullableWithAggregatesFilter | string | null
    date?: DateTimeWithAggregatesFilter | Date | string
  }

  export type EmailWhereInput = {
    AND?: Enumerable<EmailWhereInput>
    OR?: Enumerable<EmailWhereInput>
    NOT?: Enumerable<EmailWhereInput>
    id?: IntFilter | number
    channel?: StringNullableFilter | string | null
    to?: UserMonitorListRelationFilter
    from?: XOR<UserMonitorRelationFilter, UserMonitorWhereInput>
    userId?: IntFilter | number
    date?: DateTimeFilter | Date | string
    created?: DateTimeFilter | Date | string
    score?: FloatFilter | number
    magnitude?: FloatFilter | number
    Project?: ProjectListRelationFilter
  }

  export type EmailOrderByWithRelationInput = {
    id?: SortOrder
    channel?: SortOrder
    to?: UserMonitorOrderByRelationAggregateInput
    from?: UserMonitorOrderByWithRelationInput
    userId?: SortOrder
    date?: SortOrder
    created?: SortOrder
    score?: SortOrder
    magnitude?: SortOrder
    Project?: ProjectOrderByRelationAggregateInput
  }

  export type EmailWhereUniqueInput = {
    id?: number
  }

  export type EmailOrderByWithAggregationInput = {
    id?: SortOrder
    channel?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    created?: SortOrder
    score?: SortOrder
    magnitude?: SortOrder
    _count?: EmailCountOrderByAggregateInput
    _avg?: EmailAvgOrderByAggregateInput
    _max?: EmailMaxOrderByAggregateInput
    _min?: EmailMinOrderByAggregateInput
    _sum?: EmailSumOrderByAggregateInput
  }

  export type EmailScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EmailScalarWhereWithAggregatesInput>
    OR?: Enumerable<EmailScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EmailScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    channel?: StringNullableWithAggregatesFilter | string | null
    userId?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
    created?: DateTimeWithAggregatesFilter | Date | string
    score?: FloatWithAggregatesFilter | number
    magnitude?: FloatWithAggregatesFilter | number
  }

  export type SlackWhereInput = {
    AND?: Enumerable<SlackWhereInput>
    OR?: Enumerable<SlackWhereInput>
    NOT?: Enumerable<SlackWhereInput>
    id?: IntFilter | number
    to?: UserMonitorListRelationFilter
    from?: XOR<UserMonitorRelationFilter, UserMonitorWhereInput>
    channel?: StringNullableFilter | string | null
    userId?: IntFilter | number
    date?: DateTimeFilter | Date | string
    created?: DateTimeFilter | Date | string
    score?: FloatFilter | number
    magnitude?: FloatFilter | number
    Project?: ProjectListRelationFilter
  }

  export type SlackOrderByWithRelationInput = {
    id?: SortOrder
    to?: UserMonitorOrderByRelationAggregateInput
    from?: UserMonitorOrderByWithRelationInput
    channel?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    created?: SortOrder
    score?: SortOrder
    magnitude?: SortOrder
    Project?: ProjectOrderByRelationAggregateInput
  }

  export type SlackWhereUniqueInput = {
    id?: number
  }

  export type SlackOrderByWithAggregationInput = {
    id?: SortOrder
    channel?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    created?: SortOrder
    score?: SortOrder
    magnitude?: SortOrder
    _count?: SlackCountOrderByAggregateInput
    _avg?: SlackAvgOrderByAggregateInput
    _max?: SlackMaxOrderByAggregateInput
    _min?: SlackMinOrderByAggregateInput
    _sum?: SlackSumOrderByAggregateInput
  }

  export type SlackScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SlackScalarWhereWithAggregatesInput>
    OR?: Enumerable<SlackScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SlackScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    channel?: StringNullableWithAggregatesFilter | string | null
    userId?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
    created?: DateTimeWithAggregatesFilter | Date | string
    score?: FloatWithAggregatesFilter | number
    magnitude?: FloatWithAggregatesFilter | number
  }

  export type UserCreateInput = {
    date?: Date | string
    name: string
    email: string
    Project?: ProjectCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    date?: Date | string
    name: string
    email: string
    Project?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Project?: ProjectUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Project?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    date?: Date | string
    name: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    date?: Date | string
    name: string
    elasticIndex: string
    owner: UserCreateNestedOneWithoutProjectInput
    monitors?: UserMonitorCreateNestedManyWithoutProjectInput
    Email?: EmailCreateNestedOneWithoutProjectInput
    Slack?: SlackCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    date?: Date | string
    name: string
    elasticIndex: string
    monitors?: UserMonitorUncheckedCreateNestedManyWithoutProjectInput
    userId: number
    emailId?: number | null
    slackId?: number | null
  }

  export type ProjectUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    elasticIndex?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutProjectNestedInput
    monitors?: UserMonitorUpdateManyWithoutProjectNestedInput
    Email?: EmailUpdateOneWithoutProjectNestedInput
    Slack?: SlackUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    elasticIndex?: StringFieldUpdateOperationsInput | string
    monitors?: UserMonitorUncheckedUpdateManyWithoutProjectNestedInput
    userId?: IntFieldUpdateOperationsInput | number
    emailId?: NullableIntFieldUpdateOperationsInput | number | null
    slackId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectCreateManyInput = {
    id?: number
    date?: Date | string
    name: string
    elasticIndex: string
    userId: number
    emailId?: number | null
    slackId?: number | null
  }

  export type ProjectUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    elasticIndex?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    elasticIndex?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    emailId?: NullableIntFieldUpdateOperationsInput | number | null
    slackId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserMonitorCreateInput = {
    name: string
    email: string
    slack?: string | null
    date?: Date | string
    toEmails?: EmailCreateNestedManyWithoutToInput
    fromEmails?: EmailCreateNestedManyWithoutFromInput
    toSlack?: SlackCreateNestedManyWithoutToInput
    fromSlack?: SlackCreateNestedManyWithoutFromInput
    Project?: ProjectCreateNestedManyWithoutMonitorsInput
  }

  export type UserMonitorUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    slack?: string | null
    date?: Date | string
    toEmails?: EmailUncheckedCreateNestedManyWithoutToInput
    fromEmails?: EmailUncheckedCreateNestedManyWithoutFromInput
    toSlack?: SlackUncheckedCreateNestedManyWithoutToInput
    fromSlack?: SlackUncheckedCreateNestedManyWithoutFromInput
    Project?: ProjectUncheckedCreateNestedManyWithoutMonitorsInput
  }

  export type UserMonitorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    toEmails?: EmailUpdateManyWithoutToNestedInput
    fromEmails?: EmailUpdateManyWithoutFromNestedInput
    toSlack?: SlackUpdateManyWithoutToNestedInput
    fromSlack?: SlackUpdateManyWithoutFromNestedInput
    Project?: ProjectUpdateManyWithoutMonitorsNestedInput
  }

  export type UserMonitorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    toEmails?: EmailUncheckedUpdateManyWithoutToNestedInput
    fromEmails?: EmailUncheckedUpdateManyWithoutFromNestedInput
    toSlack?: SlackUncheckedUpdateManyWithoutToNestedInput
    fromSlack?: SlackUncheckedUpdateManyWithoutFromNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutMonitorsNestedInput
  }

  export type UserMonitorCreateManyInput = {
    id?: number
    name: string
    email: string
    slack?: string | null
    date?: Date | string
  }

  export type UserMonitorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMonitorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailCreateInput = {
    channel?: string | null
    to?: UserMonitorCreateNestedManyWithoutToEmailsInput
    from: UserMonitorCreateNestedOneWithoutFromEmailsInput
    date: Date | string
    created?: Date | string
    score: number
    magnitude: number
    Project?: ProjectCreateNestedManyWithoutEmailInput
  }

  export type EmailUncheckedCreateInput = {
    id?: number
    channel?: string | null
    to?: UserMonitorUncheckedCreateNestedManyWithoutToEmailsInput
    userId: number
    date: Date | string
    created?: Date | string
    score: number
    magnitude: number
    Project?: ProjectUncheckedCreateNestedManyWithoutEmailInput
  }

  export type EmailUpdateInput = {
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    to?: UserMonitorUpdateManyWithoutToEmailsNestedInput
    from?: UserMonitorUpdateOneRequiredWithoutFromEmailsNestedInput
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
    Project?: ProjectUpdateManyWithoutEmailNestedInput
  }

  export type EmailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    to?: UserMonitorUncheckedUpdateManyWithoutToEmailsNestedInput
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
    Project?: ProjectUncheckedUpdateManyWithoutEmailNestedInput
  }

  export type EmailCreateManyInput = {
    id?: number
    channel?: string | null
    userId: number
    date: Date | string
    created?: Date | string
    score: number
    magnitude: number
  }

  export type EmailUpdateManyMutationInput = {
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
  }

  export type EmailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
  }

  export type SlackCreateInput = {
    to?: UserMonitorCreateNestedManyWithoutToSlackInput
    from: UserMonitorCreateNestedOneWithoutFromSlackInput
    channel?: string | null
    date: Date | string
    created?: Date | string
    score: number
    magnitude: number
    Project?: ProjectCreateNestedManyWithoutSlackInput
  }

  export type SlackUncheckedCreateInput = {
    id?: number
    to?: UserMonitorUncheckedCreateNestedManyWithoutToSlackInput
    channel?: string | null
    userId: number
    date: Date | string
    created?: Date | string
    score: number
    magnitude: number
    Project?: ProjectUncheckedCreateNestedManyWithoutSlackInput
  }

  export type SlackUpdateInput = {
    to?: UserMonitorUpdateManyWithoutToSlackNestedInput
    from?: UserMonitorUpdateOneRequiredWithoutFromSlackNestedInput
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
    Project?: ProjectUpdateManyWithoutSlackNestedInput
  }

  export type SlackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    to?: UserMonitorUncheckedUpdateManyWithoutToSlackNestedInput
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
    Project?: ProjectUncheckedUpdateManyWithoutSlackNestedInput
  }

  export type SlackCreateManyInput = {
    id?: number
    channel?: string | null
    userId: number
    date: Date | string
    created?: Date | string
    score: number
    magnitude: number
  }

  export type SlackUpdateManyMutationInput = {
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
  }

  export type SlackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserMonitorListRelationFilter = {
    every?: UserMonitorWhereInput
    some?: UserMonitorWhereInput
    none?: UserMonitorWhereInput
  }

  export type EmailRelationFilter = {
    is?: EmailWhereInput | null
    isNot?: EmailWhereInput | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type SlackRelationFilter = {
    is?: SlackWhereInput | null
    isNot?: SlackWhereInput | null
  }

  export type UserMonitorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    elasticIndex?: SortOrder
    userId?: SortOrder
    emailId?: SortOrder
    slackId?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    emailId?: SortOrder
    slackId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    elasticIndex?: SortOrder
    userId?: SortOrder
    emailId?: SortOrder
    slackId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    name?: SortOrder
    elasticIndex?: SortOrder
    userId?: SortOrder
    emailId?: SortOrder
    slackId?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    emailId?: SortOrder
    slackId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type EmailListRelationFilter = {
    every?: EmailWhereInput
    some?: EmailWhereInput
    none?: EmailWhereInput
  }

  export type SlackListRelationFilter = {
    every?: SlackWhereInput
    some?: SlackWhereInput
    none?: SlackWhereInput
  }

  export type EmailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SlackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserMonitorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    slack?: SortOrder
    date?: SortOrder
  }

  export type UserMonitorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMonitorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    slack?: SortOrder
    date?: SortOrder
  }

  export type UserMonitorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    slack?: SortOrder
    date?: SortOrder
  }

  export type UserMonitorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type UserMonitorRelationFilter = {
    is?: UserMonitorWhereInput
    isNot?: UserMonitorWhereInput
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type EmailCountOrderByAggregateInput = {
    id?: SortOrder
    channel?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    created?: SortOrder
    score?: SortOrder
    magnitude?: SortOrder
  }

  export type EmailAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    magnitude?: SortOrder
  }

  export type EmailMaxOrderByAggregateInput = {
    id?: SortOrder
    channel?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    created?: SortOrder
    score?: SortOrder
    magnitude?: SortOrder
  }

  export type EmailMinOrderByAggregateInput = {
    id?: SortOrder
    channel?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    created?: SortOrder
    score?: SortOrder
    magnitude?: SortOrder
  }

  export type EmailSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    magnitude?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type SlackCountOrderByAggregateInput = {
    id?: SortOrder
    channel?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    created?: SortOrder
    score?: SortOrder
    magnitude?: SortOrder
  }

  export type SlackAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    magnitude?: SortOrder
  }

  export type SlackMaxOrderByAggregateInput = {
    id?: SortOrder
    channel?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    created?: SortOrder
    score?: SortOrder
    magnitude?: SortOrder
  }

  export type SlackMinOrderByAggregateInput = {
    id?: SortOrder
    channel?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    created?: SortOrder
    score?: SortOrder
    magnitude?: SortOrder
  }

  export type SlackSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    score?: SortOrder
    magnitude?: SortOrder
  }

  export type ProjectCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutOwnerInput>, Enumerable<ProjectUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutOwnerInput>
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type ProjectUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutOwnerInput>, Enumerable<ProjectUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutOwnerInput>
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProjectUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutOwnerInput>, Enumerable<ProjectUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutOwnerInput>, Enumerable<ProjectUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutProjectInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    connect?: UserWhereUniqueInput
  }

  export type UserMonitorCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<UserMonitorCreateWithoutProjectInput>, Enumerable<UserMonitorUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<UserMonitorCreateOrConnectWithoutProjectInput>
    connect?: Enumerable<UserMonitorWhereUniqueInput>
  }

  export type EmailCreateNestedOneWithoutProjectInput = {
    create?: XOR<EmailCreateWithoutProjectInput, EmailUncheckedCreateWithoutProjectInput>
    connectOrCreate?: EmailCreateOrConnectWithoutProjectInput
    connect?: EmailWhereUniqueInput
  }

  export type SlackCreateNestedOneWithoutProjectInput = {
    create?: XOR<SlackCreateWithoutProjectInput, SlackUncheckedCreateWithoutProjectInput>
    connectOrCreate?: SlackCreateOrConnectWithoutProjectInput
    connect?: SlackWhereUniqueInput
  }

  export type UserMonitorUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<Enumerable<UserMonitorCreateWithoutProjectInput>, Enumerable<UserMonitorUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<UserMonitorCreateOrConnectWithoutProjectInput>
    connect?: Enumerable<UserMonitorWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    upsert?: UserUpsertWithoutProjectInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
  }

  export type UserMonitorUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<UserMonitorCreateWithoutProjectInput>, Enumerable<UserMonitorUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<UserMonitorCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<UserMonitorUpsertWithWhereUniqueWithoutProjectInput>
    set?: Enumerable<UserMonitorWhereUniqueInput>
    disconnect?: Enumerable<UserMonitorWhereUniqueInput>
    delete?: Enumerable<UserMonitorWhereUniqueInput>
    connect?: Enumerable<UserMonitorWhereUniqueInput>
    update?: Enumerable<UserMonitorUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<UserMonitorUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<UserMonitorScalarWhereInput>
  }

  export type EmailUpdateOneWithoutProjectNestedInput = {
    create?: XOR<EmailCreateWithoutProjectInput, EmailUncheckedCreateWithoutProjectInput>
    connectOrCreate?: EmailCreateOrConnectWithoutProjectInput
    upsert?: EmailUpsertWithoutProjectInput
    disconnect?: boolean
    delete?: boolean
    connect?: EmailWhereUniqueInput
    update?: XOR<EmailUpdateWithoutProjectInput, EmailUncheckedUpdateWithoutProjectInput>
  }

  export type SlackUpdateOneWithoutProjectNestedInput = {
    create?: XOR<SlackCreateWithoutProjectInput, SlackUncheckedCreateWithoutProjectInput>
    connectOrCreate?: SlackCreateOrConnectWithoutProjectInput
    upsert?: SlackUpsertWithoutProjectInput
    disconnect?: boolean
    delete?: boolean
    connect?: SlackWhereUniqueInput
    update?: XOR<SlackUpdateWithoutProjectInput, SlackUncheckedUpdateWithoutProjectInput>
  }

  export type UserMonitorUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<Enumerable<UserMonitorCreateWithoutProjectInput>, Enumerable<UserMonitorUncheckedCreateWithoutProjectInput>>
    connectOrCreate?: Enumerable<UserMonitorCreateOrConnectWithoutProjectInput>
    upsert?: Enumerable<UserMonitorUpsertWithWhereUniqueWithoutProjectInput>
    set?: Enumerable<UserMonitorWhereUniqueInput>
    disconnect?: Enumerable<UserMonitorWhereUniqueInput>
    delete?: Enumerable<UserMonitorWhereUniqueInput>
    connect?: Enumerable<UserMonitorWhereUniqueInput>
    update?: Enumerable<UserMonitorUpdateWithWhereUniqueWithoutProjectInput>
    updateMany?: Enumerable<UserMonitorUpdateManyWithWhereWithoutProjectInput>
    deleteMany?: Enumerable<UserMonitorScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmailCreateNestedManyWithoutToInput = {
    create?: XOR<Enumerable<EmailCreateWithoutToInput>, Enumerable<EmailUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<EmailCreateOrConnectWithoutToInput>
    connect?: Enumerable<EmailWhereUniqueInput>
  }

  export type EmailCreateNestedManyWithoutFromInput = {
    create?: XOR<Enumerable<EmailCreateWithoutFromInput>, Enumerable<EmailUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<EmailCreateOrConnectWithoutFromInput>
    createMany?: EmailCreateManyFromInputEnvelope
    connect?: Enumerable<EmailWhereUniqueInput>
  }

  export type SlackCreateNestedManyWithoutToInput = {
    create?: XOR<Enumerable<SlackCreateWithoutToInput>, Enumerable<SlackUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<SlackCreateOrConnectWithoutToInput>
    connect?: Enumerable<SlackWhereUniqueInput>
  }

  export type SlackCreateNestedManyWithoutFromInput = {
    create?: XOR<Enumerable<SlackCreateWithoutFromInput>, Enumerable<SlackUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<SlackCreateOrConnectWithoutFromInput>
    createMany?: SlackCreateManyFromInputEnvelope
    connect?: Enumerable<SlackWhereUniqueInput>
  }

  export type ProjectCreateNestedManyWithoutMonitorsInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutMonitorsInput>, Enumerable<ProjectUncheckedCreateWithoutMonitorsInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutMonitorsInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type EmailUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<Enumerable<EmailCreateWithoutToInput>, Enumerable<EmailUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<EmailCreateOrConnectWithoutToInput>
    connect?: Enumerable<EmailWhereUniqueInput>
  }

  export type EmailUncheckedCreateNestedManyWithoutFromInput = {
    create?: XOR<Enumerable<EmailCreateWithoutFromInput>, Enumerable<EmailUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<EmailCreateOrConnectWithoutFromInput>
    createMany?: EmailCreateManyFromInputEnvelope
    connect?: Enumerable<EmailWhereUniqueInput>
  }

  export type SlackUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<Enumerable<SlackCreateWithoutToInput>, Enumerable<SlackUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<SlackCreateOrConnectWithoutToInput>
    connect?: Enumerable<SlackWhereUniqueInput>
  }

  export type SlackUncheckedCreateNestedManyWithoutFromInput = {
    create?: XOR<Enumerable<SlackCreateWithoutFromInput>, Enumerable<SlackUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<SlackCreateOrConnectWithoutFromInput>
    createMany?: SlackCreateManyFromInputEnvelope
    connect?: Enumerable<SlackWhereUniqueInput>
  }

  export type ProjectUncheckedCreateNestedManyWithoutMonitorsInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutMonitorsInput>, Enumerable<ProjectUncheckedCreateWithoutMonitorsInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutMonitorsInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EmailUpdateManyWithoutToNestedInput = {
    create?: XOR<Enumerable<EmailCreateWithoutToInput>, Enumerable<EmailUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<EmailCreateOrConnectWithoutToInput>
    upsert?: Enumerable<EmailUpsertWithWhereUniqueWithoutToInput>
    set?: Enumerable<EmailWhereUniqueInput>
    disconnect?: Enumerable<EmailWhereUniqueInput>
    delete?: Enumerable<EmailWhereUniqueInput>
    connect?: Enumerable<EmailWhereUniqueInput>
    update?: Enumerable<EmailUpdateWithWhereUniqueWithoutToInput>
    updateMany?: Enumerable<EmailUpdateManyWithWhereWithoutToInput>
    deleteMany?: Enumerable<EmailScalarWhereInput>
  }

  export type EmailUpdateManyWithoutFromNestedInput = {
    create?: XOR<Enumerable<EmailCreateWithoutFromInput>, Enumerable<EmailUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<EmailCreateOrConnectWithoutFromInput>
    upsert?: Enumerable<EmailUpsertWithWhereUniqueWithoutFromInput>
    createMany?: EmailCreateManyFromInputEnvelope
    set?: Enumerable<EmailWhereUniqueInput>
    disconnect?: Enumerable<EmailWhereUniqueInput>
    delete?: Enumerable<EmailWhereUniqueInput>
    connect?: Enumerable<EmailWhereUniqueInput>
    update?: Enumerable<EmailUpdateWithWhereUniqueWithoutFromInput>
    updateMany?: Enumerable<EmailUpdateManyWithWhereWithoutFromInput>
    deleteMany?: Enumerable<EmailScalarWhereInput>
  }

  export type SlackUpdateManyWithoutToNestedInput = {
    create?: XOR<Enumerable<SlackCreateWithoutToInput>, Enumerable<SlackUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<SlackCreateOrConnectWithoutToInput>
    upsert?: Enumerable<SlackUpsertWithWhereUniqueWithoutToInput>
    set?: Enumerable<SlackWhereUniqueInput>
    disconnect?: Enumerable<SlackWhereUniqueInput>
    delete?: Enumerable<SlackWhereUniqueInput>
    connect?: Enumerable<SlackWhereUniqueInput>
    update?: Enumerable<SlackUpdateWithWhereUniqueWithoutToInput>
    updateMany?: Enumerable<SlackUpdateManyWithWhereWithoutToInput>
    deleteMany?: Enumerable<SlackScalarWhereInput>
  }

  export type SlackUpdateManyWithoutFromNestedInput = {
    create?: XOR<Enumerable<SlackCreateWithoutFromInput>, Enumerable<SlackUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<SlackCreateOrConnectWithoutFromInput>
    upsert?: Enumerable<SlackUpsertWithWhereUniqueWithoutFromInput>
    createMany?: SlackCreateManyFromInputEnvelope
    set?: Enumerable<SlackWhereUniqueInput>
    disconnect?: Enumerable<SlackWhereUniqueInput>
    delete?: Enumerable<SlackWhereUniqueInput>
    connect?: Enumerable<SlackWhereUniqueInput>
    update?: Enumerable<SlackUpdateWithWhereUniqueWithoutFromInput>
    updateMany?: Enumerable<SlackUpdateManyWithWhereWithoutFromInput>
    deleteMany?: Enumerable<SlackScalarWhereInput>
  }

  export type ProjectUpdateManyWithoutMonitorsNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutMonitorsInput>, Enumerable<ProjectUncheckedCreateWithoutMonitorsInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutMonitorsInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutMonitorsInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutMonitorsInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutMonitorsInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type EmailUncheckedUpdateManyWithoutToNestedInput = {
    create?: XOR<Enumerable<EmailCreateWithoutToInput>, Enumerable<EmailUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<EmailCreateOrConnectWithoutToInput>
    upsert?: Enumerable<EmailUpsertWithWhereUniqueWithoutToInput>
    set?: Enumerable<EmailWhereUniqueInput>
    disconnect?: Enumerable<EmailWhereUniqueInput>
    delete?: Enumerable<EmailWhereUniqueInput>
    connect?: Enumerable<EmailWhereUniqueInput>
    update?: Enumerable<EmailUpdateWithWhereUniqueWithoutToInput>
    updateMany?: Enumerable<EmailUpdateManyWithWhereWithoutToInput>
    deleteMany?: Enumerable<EmailScalarWhereInput>
  }

  export type EmailUncheckedUpdateManyWithoutFromNestedInput = {
    create?: XOR<Enumerable<EmailCreateWithoutFromInput>, Enumerable<EmailUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<EmailCreateOrConnectWithoutFromInput>
    upsert?: Enumerable<EmailUpsertWithWhereUniqueWithoutFromInput>
    createMany?: EmailCreateManyFromInputEnvelope
    set?: Enumerable<EmailWhereUniqueInput>
    disconnect?: Enumerable<EmailWhereUniqueInput>
    delete?: Enumerable<EmailWhereUniqueInput>
    connect?: Enumerable<EmailWhereUniqueInput>
    update?: Enumerable<EmailUpdateWithWhereUniqueWithoutFromInput>
    updateMany?: Enumerable<EmailUpdateManyWithWhereWithoutFromInput>
    deleteMany?: Enumerable<EmailScalarWhereInput>
  }

  export type SlackUncheckedUpdateManyWithoutToNestedInput = {
    create?: XOR<Enumerable<SlackCreateWithoutToInput>, Enumerable<SlackUncheckedCreateWithoutToInput>>
    connectOrCreate?: Enumerable<SlackCreateOrConnectWithoutToInput>
    upsert?: Enumerable<SlackUpsertWithWhereUniqueWithoutToInput>
    set?: Enumerable<SlackWhereUniqueInput>
    disconnect?: Enumerable<SlackWhereUniqueInput>
    delete?: Enumerable<SlackWhereUniqueInput>
    connect?: Enumerable<SlackWhereUniqueInput>
    update?: Enumerable<SlackUpdateWithWhereUniqueWithoutToInput>
    updateMany?: Enumerable<SlackUpdateManyWithWhereWithoutToInput>
    deleteMany?: Enumerable<SlackScalarWhereInput>
  }

  export type SlackUncheckedUpdateManyWithoutFromNestedInput = {
    create?: XOR<Enumerable<SlackCreateWithoutFromInput>, Enumerable<SlackUncheckedCreateWithoutFromInput>>
    connectOrCreate?: Enumerable<SlackCreateOrConnectWithoutFromInput>
    upsert?: Enumerable<SlackUpsertWithWhereUniqueWithoutFromInput>
    createMany?: SlackCreateManyFromInputEnvelope
    set?: Enumerable<SlackWhereUniqueInput>
    disconnect?: Enumerable<SlackWhereUniqueInput>
    delete?: Enumerable<SlackWhereUniqueInput>
    connect?: Enumerable<SlackWhereUniqueInput>
    update?: Enumerable<SlackUpdateWithWhereUniqueWithoutFromInput>
    updateMany?: Enumerable<SlackUpdateManyWithWhereWithoutFromInput>
    deleteMany?: Enumerable<SlackScalarWhereInput>
  }

  export type ProjectUncheckedUpdateManyWithoutMonitorsNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutMonitorsInput>, Enumerable<ProjectUncheckedCreateWithoutMonitorsInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutMonitorsInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutMonitorsInput>
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutMonitorsInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutMonitorsInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type UserMonitorCreateNestedManyWithoutToEmailsInput = {
    create?: XOR<Enumerable<UserMonitorCreateWithoutToEmailsInput>, Enumerable<UserMonitorUncheckedCreateWithoutToEmailsInput>>
    connectOrCreate?: Enumerable<UserMonitorCreateOrConnectWithoutToEmailsInput>
    connect?: Enumerable<UserMonitorWhereUniqueInput>
  }

  export type UserMonitorCreateNestedOneWithoutFromEmailsInput = {
    create?: XOR<UserMonitorCreateWithoutFromEmailsInput, UserMonitorUncheckedCreateWithoutFromEmailsInput>
    connectOrCreate?: UserMonitorCreateOrConnectWithoutFromEmailsInput
    connect?: UserMonitorWhereUniqueInput
  }

  export type ProjectCreateNestedManyWithoutEmailInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutEmailInput>, Enumerable<ProjectUncheckedCreateWithoutEmailInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutEmailInput>
    createMany?: ProjectCreateManyEmailInputEnvelope
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type UserMonitorUncheckedCreateNestedManyWithoutToEmailsInput = {
    create?: XOR<Enumerable<UserMonitorCreateWithoutToEmailsInput>, Enumerable<UserMonitorUncheckedCreateWithoutToEmailsInput>>
    connectOrCreate?: Enumerable<UserMonitorCreateOrConnectWithoutToEmailsInput>
    connect?: Enumerable<UserMonitorWhereUniqueInput>
  }

  export type ProjectUncheckedCreateNestedManyWithoutEmailInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutEmailInput>, Enumerable<ProjectUncheckedCreateWithoutEmailInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutEmailInput>
    createMany?: ProjectCreateManyEmailInputEnvelope
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type UserMonitorUpdateManyWithoutToEmailsNestedInput = {
    create?: XOR<Enumerable<UserMonitorCreateWithoutToEmailsInput>, Enumerable<UserMonitorUncheckedCreateWithoutToEmailsInput>>
    connectOrCreate?: Enumerable<UserMonitorCreateOrConnectWithoutToEmailsInput>
    upsert?: Enumerable<UserMonitorUpsertWithWhereUniqueWithoutToEmailsInput>
    set?: Enumerable<UserMonitorWhereUniqueInput>
    disconnect?: Enumerable<UserMonitorWhereUniqueInput>
    delete?: Enumerable<UserMonitorWhereUniqueInput>
    connect?: Enumerable<UserMonitorWhereUniqueInput>
    update?: Enumerable<UserMonitorUpdateWithWhereUniqueWithoutToEmailsInput>
    updateMany?: Enumerable<UserMonitorUpdateManyWithWhereWithoutToEmailsInput>
    deleteMany?: Enumerable<UserMonitorScalarWhereInput>
  }

  export type UserMonitorUpdateOneRequiredWithoutFromEmailsNestedInput = {
    create?: XOR<UserMonitorCreateWithoutFromEmailsInput, UserMonitorUncheckedCreateWithoutFromEmailsInput>
    connectOrCreate?: UserMonitorCreateOrConnectWithoutFromEmailsInput
    upsert?: UserMonitorUpsertWithoutFromEmailsInput
    connect?: UserMonitorWhereUniqueInput
    update?: XOR<UserMonitorUpdateWithoutFromEmailsInput, UserMonitorUncheckedUpdateWithoutFromEmailsInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateManyWithoutEmailNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutEmailInput>, Enumerable<ProjectUncheckedCreateWithoutEmailInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutEmailInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutEmailInput>
    createMany?: ProjectCreateManyEmailInputEnvelope
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutEmailInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutEmailInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type UserMonitorUncheckedUpdateManyWithoutToEmailsNestedInput = {
    create?: XOR<Enumerable<UserMonitorCreateWithoutToEmailsInput>, Enumerable<UserMonitorUncheckedCreateWithoutToEmailsInput>>
    connectOrCreate?: Enumerable<UserMonitorCreateOrConnectWithoutToEmailsInput>
    upsert?: Enumerable<UserMonitorUpsertWithWhereUniqueWithoutToEmailsInput>
    set?: Enumerable<UserMonitorWhereUniqueInput>
    disconnect?: Enumerable<UserMonitorWhereUniqueInput>
    delete?: Enumerable<UserMonitorWhereUniqueInput>
    connect?: Enumerable<UserMonitorWhereUniqueInput>
    update?: Enumerable<UserMonitorUpdateWithWhereUniqueWithoutToEmailsInput>
    updateMany?: Enumerable<UserMonitorUpdateManyWithWhereWithoutToEmailsInput>
    deleteMany?: Enumerable<UserMonitorScalarWhereInput>
  }

  export type ProjectUncheckedUpdateManyWithoutEmailNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutEmailInput>, Enumerable<ProjectUncheckedCreateWithoutEmailInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutEmailInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutEmailInput>
    createMany?: ProjectCreateManyEmailInputEnvelope
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutEmailInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutEmailInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type UserMonitorCreateNestedManyWithoutToSlackInput = {
    create?: XOR<Enumerable<UserMonitorCreateWithoutToSlackInput>, Enumerable<UserMonitorUncheckedCreateWithoutToSlackInput>>
    connectOrCreate?: Enumerable<UserMonitorCreateOrConnectWithoutToSlackInput>
    connect?: Enumerable<UserMonitorWhereUniqueInput>
  }

  export type UserMonitorCreateNestedOneWithoutFromSlackInput = {
    create?: XOR<UserMonitorCreateWithoutFromSlackInput, UserMonitorUncheckedCreateWithoutFromSlackInput>
    connectOrCreate?: UserMonitorCreateOrConnectWithoutFromSlackInput
    connect?: UserMonitorWhereUniqueInput
  }

  export type ProjectCreateNestedManyWithoutSlackInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutSlackInput>, Enumerable<ProjectUncheckedCreateWithoutSlackInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutSlackInput>
    createMany?: ProjectCreateManySlackInputEnvelope
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type UserMonitorUncheckedCreateNestedManyWithoutToSlackInput = {
    create?: XOR<Enumerable<UserMonitorCreateWithoutToSlackInput>, Enumerable<UserMonitorUncheckedCreateWithoutToSlackInput>>
    connectOrCreate?: Enumerable<UserMonitorCreateOrConnectWithoutToSlackInput>
    connect?: Enumerable<UserMonitorWhereUniqueInput>
  }

  export type ProjectUncheckedCreateNestedManyWithoutSlackInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutSlackInput>, Enumerable<ProjectUncheckedCreateWithoutSlackInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutSlackInput>
    createMany?: ProjectCreateManySlackInputEnvelope
    connect?: Enumerable<ProjectWhereUniqueInput>
  }

  export type UserMonitorUpdateManyWithoutToSlackNestedInput = {
    create?: XOR<Enumerable<UserMonitorCreateWithoutToSlackInput>, Enumerable<UserMonitorUncheckedCreateWithoutToSlackInput>>
    connectOrCreate?: Enumerable<UserMonitorCreateOrConnectWithoutToSlackInput>
    upsert?: Enumerable<UserMonitorUpsertWithWhereUniqueWithoutToSlackInput>
    set?: Enumerable<UserMonitorWhereUniqueInput>
    disconnect?: Enumerable<UserMonitorWhereUniqueInput>
    delete?: Enumerable<UserMonitorWhereUniqueInput>
    connect?: Enumerable<UserMonitorWhereUniqueInput>
    update?: Enumerable<UserMonitorUpdateWithWhereUniqueWithoutToSlackInput>
    updateMany?: Enumerable<UserMonitorUpdateManyWithWhereWithoutToSlackInput>
    deleteMany?: Enumerable<UserMonitorScalarWhereInput>
  }

  export type UserMonitorUpdateOneRequiredWithoutFromSlackNestedInput = {
    create?: XOR<UserMonitorCreateWithoutFromSlackInput, UserMonitorUncheckedCreateWithoutFromSlackInput>
    connectOrCreate?: UserMonitorCreateOrConnectWithoutFromSlackInput
    upsert?: UserMonitorUpsertWithoutFromSlackInput
    connect?: UserMonitorWhereUniqueInput
    update?: XOR<UserMonitorUpdateWithoutFromSlackInput, UserMonitorUncheckedUpdateWithoutFromSlackInput>
  }

  export type ProjectUpdateManyWithoutSlackNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutSlackInput>, Enumerable<ProjectUncheckedCreateWithoutSlackInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutSlackInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutSlackInput>
    createMany?: ProjectCreateManySlackInputEnvelope
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutSlackInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutSlackInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type UserMonitorUncheckedUpdateManyWithoutToSlackNestedInput = {
    create?: XOR<Enumerable<UserMonitorCreateWithoutToSlackInput>, Enumerable<UserMonitorUncheckedCreateWithoutToSlackInput>>
    connectOrCreate?: Enumerable<UserMonitorCreateOrConnectWithoutToSlackInput>
    upsert?: Enumerable<UserMonitorUpsertWithWhereUniqueWithoutToSlackInput>
    set?: Enumerable<UserMonitorWhereUniqueInput>
    disconnect?: Enumerable<UserMonitorWhereUniqueInput>
    delete?: Enumerable<UserMonitorWhereUniqueInput>
    connect?: Enumerable<UserMonitorWhereUniqueInput>
    update?: Enumerable<UserMonitorUpdateWithWhereUniqueWithoutToSlackInput>
    updateMany?: Enumerable<UserMonitorUpdateManyWithWhereWithoutToSlackInput>
    deleteMany?: Enumerable<UserMonitorScalarWhereInput>
  }

  export type ProjectUncheckedUpdateManyWithoutSlackNestedInput = {
    create?: XOR<Enumerable<ProjectCreateWithoutSlackInput>, Enumerable<ProjectUncheckedCreateWithoutSlackInput>>
    connectOrCreate?: Enumerable<ProjectCreateOrConnectWithoutSlackInput>
    upsert?: Enumerable<ProjectUpsertWithWhereUniqueWithoutSlackInput>
    createMany?: ProjectCreateManySlackInputEnvelope
    set?: Enumerable<ProjectWhereUniqueInput>
    disconnect?: Enumerable<ProjectWhereUniqueInput>
    delete?: Enumerable<ProjectWhereUniqueInput>
    connect?: Enumerable<ProjectWhereUniqueInput>
    update?: Enumerable<ProjectUpdateWithWhereUniqueWithoutSlackInput>
    updateMany?: Enumerable<ProjectUpdateManyWithWhereWithoutSlackInput>
    deleteMany?: Enumerable<ProjectScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type ProjectCreateWithoutOwnerInput = {
    date?: Date | string
    name: string
    elasticIndex: string
    monitors?: UserMonitorCreateNestedManyWithoutProjectInput
    Email?: EmailCreateNestedOneWithoutProjectInput
    Slack?: SlackCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutOwnerInput = {
    id?: number
    date?: Date | string
    name: string
    elasticIndex: string
    monitors?: UserMonitorUncheckedCreateNestedManyWithoutProjectInput
    emailId?: number | null
    slackId?: number | null
  }

  export type ProjectCreateOrConnectWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectCreateManyOwnerInputEnvelope = {
    data: Enumerable<ProjectCreateManyOwnerInput>
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutOwnerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: Enumerable<ProjectScalarWhereInput>
    OR?: Enumerable<ProjectScalarWhereInput>
    NOT?: Enumerable<ProjectScalarWhereInput>
    id?: IntFilter | number
    date?: DateTimeFilter | Date | string
    name?: StringFilter | string
    elasticIndex?: StringFilter | string
    userId?: IntFilter | number
    emailId?: IntNullableFilter | number | null
    slackId?: IntNullableFilter | number | null
  }

  export type UserCreateWithoutProjectInput = {
    date?: Date | string
    name: string
    email: string
  }

  export type UserUncheckedCreateWithoutProjectInput = {
    id?: number
    date?: Date | string
    name: string
    email: string
  }

  export type UserCreateOrConnectWithoutProjectInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
  }

  export type UserMonitorCreateWithoutProjectInput = {
    name: string
    email: string
    slack?: string | null
    date?: Date | string
    toEmails?: EmailCreateNestedManyWithoutToInput
    fromEmails?: EmailCreateNestedManyWithoutFromInput
    toSlack?: SlackCreateNestedManyWithoutToInput
    fromSlack?: SlackCreateNestedManyWithoutFromInput
  }

  export type UserMonitorUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    email: string
    slack?: string | null
    date?: Date | string
    toEmails?: EmailUncheckedCreateNestedManyWithoutToInput
    fromEmails?: EmailUncheckedCreateNestedManyWithoutFromInput
    toSlack?: SlackUncheckedCreateNestedManyWithoutToInput
    fromSlack?: SlackUncheckedCreateNestedManyWithoutFromInput
  }

  export type UserMonitorCreateOrConnectWithoutProjectInput = {
    where: UserMonitorWhereUniqueInput
    create: XOR<UserMonitorCreateWithoutProjectInput, UserMonitorUncheckedCreateWithoutProjectInput>
  }

  export type EmailCreateWithoutProjectInput = {
    channel?: string | null
    to?: UserMonitorCreateNestedManyWithoutToEmailsInput
    from: UserMonitorCreateNestedOneWithoutFromEmailsInput
    date: Date | string
    created?: Date | string
    score: number
    magnitude: number
  }

  export type EmailUncheckedCreateWithoutProjectInput = {
    id?: number
    channel?: string | null
    to?: UserMonitorUncheckedCreateNestedManyWithoutToEmailsInput
    userId: number
    date: Date | string
    created?: Date | string
    score: number
    magnitude: number
  }

  export type EmailCreateOrConnectWithoutProjectInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutProjectInput, EmailUncheckedCreateWithoutProjectInput>
  }

  export type SlackCreateWithoutProjectInput = {
    to?: UserMonitorCreateNestedManyWithoutToSlackInput
    from: UserMonitorCreateNestedOneWithoutFromSlackInput
    channel?: string | null
    date: Date | string
    created?: Date | string
    score: number
    magnitude: number
  }

  export type SlackUncheckedCreateWithoutProjectInput = {
    id?: number
    to?: UserMonitorUncheckedCreateNestedManyWithoutToSlackInput
    channel?: string | null
    userId: number
    date: Date | string
    created?: Date | string
    score: number
    magnitude: number
  }

  export type SlackCreateOrConnectWithoutProjectInput = {
    where: SlackWhereUniqueInput
    create: XOR<SlackCreateWithoutProjectInput, SlackUncheckedCreateWithoutProjectInput>
  }

  export type UserUpsertWithoutProjectInput = {
    update: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
  }

  export type UserUpdateWithoutProjectInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserMonitorUpsertWithWhereUniqueWithoutProjectInput = {
    where: UserMonitorWhereUniqueInput
    update: XOR<UserMonitorUpdateWithoutProjectInput, UserMonitorUncheckedUpdateWithoutProjectInput>
    create: XOR<UserMonitorCreateWithoutProjectInput, UserMonitorUncheckedCreateWithoutProjectInput>
  }

  export type UserMonitorUpdateWithWhereUniqueWithoutProjectInput = {
    where: UserMonitorWhereUniqueInput
    data: XOR<UserMonitorUpdateWithoutProjectInput, UserMonitorUncheckedUpdateWithoutProjectInput>
  }

  export type UserMonitorUpdateManyWithWhereWithoutProjectInput = {
    where: UserMonitorScalarWhereInput
    data: XOR<UserMonitorUpdateManyMutationInput, UserMonitorUncheckedUpdateManyWithoutMonitorsInput>
  }

  export type UserMonitorScalarWhereInput = {
    AND?: Enumerable<UserMonitorScalarWhereInput>
    OR?: Enumerable<UserMonitorScalarWhereInput>
    NOT?: Enumerable<UserMonitorScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    slack?: StringNullableFilter | string | null
    date?: DateTimeFilter | Date | string
  }

  export type EmailUpsertWithoutProjectInput = {
    update: XOR<EmailUpdateWithoutProjectInput, EmailUncheckedUpdateWithoutProjectInput>
    create: XOR<EmailCreateWithoutProjectInput, EmailUncheckedCreateWithoutProjectInput>
  }

  export type EmailUpdateWithoutProjectInput = {
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    to?: UserMonitorUpdateManyWithoutToEmailsNestedInput
    from?: UserMonitorUpdateOneRequiredWithoutFromEmailsNestedInput
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
  }

  export type EmailUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    to?: UserMonitorUncheckedUpdateManyWithoutToEmailsNestedInput
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
  }

  export type SlackUpsertWithoutProjectInput = {
    update: XOR<SlackUpdateWithoutProjectInput, SlackUncheckedUpdateWithoutProjectInput>
    create: XOR<SlackCreateWithoutProjectInput, SlackUncheckedCreateWithoutProjectInput>
  }

  export type SlackUpdateWithoutProjectInput = {
    to?: UserMonitorUpdateManyWithoutToSlackNestedInput
    from?: UserMonitorUpdateOneRequiredWithoutFromSlackNestedInput
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
  }

  export type SlackUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    to?: UserMonitorUncheckedUpdateManyWithoutToSlackNestedInput
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
  }

  export type EmailCreateWithoutToInput = {
    channel?: string | null
    from: UserMonitorCreateNestedOneWithoutFromEmailsInput
    date: Date | string
    created?: Date | string
    score: number
    magnitude: number
    Project?: ProjectCreateNestedManyWithoutEmailInput
  }

  export type EmailUncheckedCreateWithoutToInput = {
    id?: number
    channel?: string | null
    userId: number
    date: Date | string
    created?: Date | string
    score: number
    magnitude: number
    Project?: ProjectUncheckedCreateNestedManyWithoutEmailInput
  }

  export type EmailCreateOrConnectWithoutToInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutToInput, EmailUncheckedCreateWithoutToInput>
  }

  export type EmailCreateWithoutFromInput = {
    channel?: string | null
    to?: UserMonitorCreateNestedManyWithoutToEmailsInput
    date: Date | string
    created?: Date | string
    score: number
    magnitude: number
    Project?: ProjectCreateNestedManyWithoutEmailInput
  }

  export type EmailUncheckedCreateWithoutFromInput = {
    id?: number
    channel?: string | null
    to?: UserMonitorUncheckedCreateNestedManyWithoutToEmailsInput
    date: Date | string
    created?: Date | string
    score: number
    magnitude: number
    Project?: ProjectUncheckedCreateNestedManyWithoutEmailInput
  }

  export type EmailCreateOrConnectWithoutFromInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutFromInput, EmailUncheckedCreateWithoutFromInput>
  }

  export type EmailCreateManyFromInputEnvelope = {
    data: Enumerable<EmailCreateManyFromInput>
    skipDuplicates?: boolean
  }

  export type SlackCreateWithoutToInput = {
    from: UserMonitorCreateNestedOneWithoutFromSlackInput
    channel?: string | null
    date: Date | string
    created?: Date | string
    score: number
    magnitude: number
    Project?: ProjectCreateNestedManyWithoutSlackInput
  }

  export type SlackUncheckedCreateWithoutToInput = {
    id?: number
    channel?: string | null
    userId: number
    date: Date | string
    created?: Date | string
    score: number
    magnitude: number
    Project?: ProjectUncheckedCreateNestedManyWithoutSlackInput
  }

  export type SlackCreateOrConnectWithoutToInput = {
    where: SlackWhereUniqueInput
    create: XOR<SlackCreateWithoutToInput, SlackUncheckedCreateWithoutToInput>
  }

  export type SlackCreateWithoutFromInput = {
    to?: UserMonitorCreateNestedManyWithoutToSlackInput
    channel?: string | null
    date: Date | string
    created?: Date | string
    score: number
    magnitude: number
    Project?: ProjectCreateNestedManyWithoutSlackInput
  }

  export type SlackUncheckedCreateWithoutFromInput = {
    id?: number
    to?: UserMonitorUncheckedCreateNestedManyWithoutToSlackInput
    channel?: string | null
    date: Date | string
    created?: Date | string
    score: number
    magnitude: number
    Project?: ProjectUncheckedCreateNestedManyWithoutSlackInput
  }

  export type SlackCreateOrConnectWithoutFromInput = {
    where: SlackWhereUniqueInput
    create: XOR<SlackCreateWithoutFromInput, SlackUncheckedCreateWithoutFromInput>
  }

  export type SlackCreateManyFromInputEnvelope = {
    data: Enumerable<SlackCreateManyFromInput>
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutMonitorsInput = {
    date?: Date | string
    name: string
    elasticIndex: string
    owner: UserCreateNestedOneWithoutProjectInput
    Email?: EmailCreateNestedOneWithoutProjectInput
    Slack?: SlackCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMonitorsInput = {
    id?: number
    date?: Date | string
    name: string
    elasticIndex: string
    userId: number
    emailId?: number | null
    slackId?: number | null
  }

  export type ProjectCreateOrConnectWithoutMonitorsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMonitorsInput, ProjectUncheckedCreateWithoutMonitorsInput>
  }

  export type EmailUpsertWithWhereUniqueWithoutToInput = {
    where: EmailWhereUniqueInput
    update: XOR<EmailUpdateWithoutToInput, EmailUncheckedUpdateWithoutToInput>
    create: XOR<EmailCreateWithoutToInput, EmailUncheckedCreateWithoutToInput>
  }

  export type EmailUpdateWithWhereUniqueWithoutToInput = {
    where: EmailWhereUniqueInput
    data: XOR<EmailUpdateWithoutToInput, EmailUncheckedUpdateWithoutToInput>
  }

  export type EmailUpdateManyWithWhereWithoutToInput = {
    where: EmailScalarWhereInput
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyWithoutToEmailsInput>
  }

  export type EmailScalarWhereInput = {
    AND?: Enumerable<EmailScalarWhereInput>
    OR?: Enumerable<EmailScalarWhereInput>
    NOT?: Enumerable<EmailScalarWhereInput>
    id?: IntFilter | number
    channel?: StringNullableFilter | string | null
    userId?: IntFilter | number
    date?: DateTimeFilter | Date | string
    created?: DateTimeFilter | Date | string
    score?: FloatFilter | number
    magnitude?: FloatFilter | number
  }

  export type EmailUpsertWithWhereUniqueWithoutFromInput = {
    where: EmailWhereUniqueInput
    update: XOR<EmailUpdateWithoutFromInput, EmailUncheckedUpdateWithoutFromInput>
    create: XOR<EmailCreateWithoutFromInput, EmailUncheckedCreateWithoutFromInput>
  }

  export type EmailUpdateWithWhereUniqueWithoutFromInput = {
    where: EmailWhereUniqueInput
    data: XOR<EmailUpdateWithoutFromInput, EmailUncheckedUpdateWithoutFromInput>
  }

  export type EmailUpdateManyWithWhereWithoutFromInput = {
    where: EmailScalarWhereInput
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyWithoutFromEmailsInput>
  }

  export type SlackUpsertWithWhereUniqueWithoutToInput = {
    where: SlackWhereUniqueInput
    update: XOR<SlackUpdateWithoutToInput, SlackUncheckedUpdateWithoutToInput>
    create: XOR<SlackCreateWithoutToInput, SlackUncheckedCreateWithoutToInput>
  }

  export type SlackUpdateWithWhereUniqueWithoutToInput = {
    where: SlackWhereUniqueInput
    data: XOR<SlackUpdateWithoutToInput, SlackUncheckedUpdateWithoutToInput>
  }

  export type SlackUpdateManyWithWhereWithoutToInput = {
    where: SlackScalarWhereInput
    data: XOR<SlackUpdateManyMutationInput, SlackUncheckedUpdateManyWithoutToSlackInput>
  }

  export type SlackScalarWhereInput = {
    AND?: Enumerable<SlackScalarWhereInput>
    OR?: Enumerable<SlackScalarWhereInput>
    NOT?: Enumerable<SlackScalarWhereInput>
    id?: IntFilter | number
    channel?: StringNullableFilter | string | null
    userId?: IntFilter | number
    date?: DateTimeFilter | Date | string
    created?: DateTimeFilter | Date | string
    score?: FloatFilter | number
    magnitude?: FloatFilter | number
  }

  export type SlackUpsertWithWhereUniqueWithoutFromInput = {
    where: SlackWhereUniqueInput
    update: XOR<SlackUpdateWithoutFromInput, SlackUncheckedUpdateWithoutFromInput>
    create: XOR<SlackCreateWithoutFromInput, SlackUncheckedCreateWithoutFromInput>
  }

  export type SlackUpdateWithWhereUniqueWithoutFromInput = {
    where: SlackWhereUniqueInput
    data: XOR<SlackUpdateWithoutFromInput, SlackUncheckedUpdateWithoutFromInput>
  }

  export type SlackUpdateManyWithWhereWithoutFromInput = {
    where: SlackScalarWhereInput
    data: XOR<SlackUpdateManyMutationInput, SlackUncheckedUpdateManyWithoutFromSlackInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutMonitorsInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutMonitorsInput, ProjectUncheckedUpdateWithoutMonitorsInput>
    create: XOR<ProjectCreateWithoutMonitorsInput, ProjectUncheckedCreateWithoutMonitorsInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutMonitorsInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutMonitorsInput, ProjectUncheckedUpdateWithoutMonitorsInput>
  }

  export type ProjectUpdateManyWithWhereWithoutMonitorsInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProjectInput>
  }

  export type UserMonitorCreateWithoutToEmailsInput = {
    name: string
    email: string
    slack?: string | null
    date?: Date | string
    fromEmails?: EmailCreateNestedManyWithoutFromInput
    toSlack?: SlackCreateNestedManyWithoutToInput
    fromSlack?: SlackCreateNestedManyWithoutFromInput
    Project?: ProjectCreateNestedManyWithoutMonitorsInput
  }

  export type UserMonitorUncheckedCreateWithoutToEmailsInput = {
    id?: number
    name: string
    email: string
    slack?: string | null
    date?: Date | string
    fromEmails?: EmailUncheckedCreateNestedManyWithoutFromInput
    toSlack?: SlackUncheckedCreateNestedManyWithoutToInput
    fromSlack?: SlackUncheckedCreateNestedManyWithoutFromInput
    Project?: ProjectUncheckedCreateNestedManyWithoutMonitorsInput
  }

  export type UserMonitorCreateOrConnectWithoutToEmailsInput = {
    where: UserMonitorWhereUniqueInput
    create: XOR<UserMonitorCreateWithoutToEmailsInput, UserMonitorUncheckedCreateWithoutToEmailsInput>
  }

  export type UserMonitorCreateWithoutFromEmailsInput = {
    name: string
    email: string
    slack?: string | null
    date?: Date | string
    toEmails?: EmailCreateNestedManyWithoutToInput
    toSlack?: SlackCreateNestedManyWithoutToInput
    fromSlack?: SlackCreateNestedManyWithoutFromInput
    Project?: ProjectCreateNestedManyWithoutMonitorsInput
  }

  export type UserMonitorUncheckedCreateWithoutFromEmailsInput = {
    id?: number
    name: string
    email: string
    slack?: string | null
    date?: Date | string
    toEmails?: EmailUncheckedCreateNestedManyWithoutToInput
    toSlack?: SlackUncheckedCreateNestedManyWithoutToInput
    fromSlack?: SlackUncheckedCreateNestedManyWithoutFromInput
    Project?: ProjectUncheckedCreateNestedManyWithoutMonitorsInput
  }

  export type UserMonitorCreateOrConnectWithoutFromEmailsInput = {
    where: UserMonitorWhereUniqueInput
    create: XOR<UserMonitorCreateWithoutFromEmailsInput, UserMonitorUncheckedCreateWithoutFromEmailsInput>
  }

  export type ProjectCreateWithoutEmailInput = {
    date?: Date | string
    name: string
    elasticIndex: string
    owner: UserCreateNestedOneWithoutProjectInput
    monitors?: UserMonitorCreateNestedManyWithoutProjectInput
    Slack?: SlackCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutEmailInput = {
    id?: number
    date?: Date | string
    name: string
    elasticIndex: string
    monitors?: UserMonitorUncheckedCreateNestedManyWithoutProjectInput
    userId: number
    slackId?: number | null
  }

  export type ProjectCreateOrConnectWithoutEmailInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutEmailInput, ProjectUncheckedCreateWithoutEmailInput>
  }

  export type ProjectCreateManyEmailInputEnvelope = {
    data: Enumerable<ProjectCreateManyEmailInput>
    skipDuplicates?: boolean
  }

  export type UserMonitorUpsertWithWhereUniqueWithoutToEmailsInput = {
    where: UserMonitorWhereUniqueInput
    update: XOR<UserMonitorUpdateWithoutToEmailsInput, UserMonitorUncheckedUpdateWithoutToEmailsInput>
    create: XOR<UserMonitorCreateWithoutToEmailsInput, UserMonitorUncheckedCreateWithoutToEmailsInput>
  }

  export type UserMonitorUpdateWithWhereUniqueWithoutToEmailsInput = {
    where: UserMonitorWhereUniqueInput
    data: XOR<UserMonitorUpdateWithoutToEmailsInput, UserMonitorUncheckedUpdateWithoutToEmailsInput>
  }

  export type UserMonitorUpdateManyWithWhereWithoutToEmailsInput = {
    where: UserMonitorScalarWhereInput
    data: XOR<UserMonitorUpdateManyMutationInput, UserMonitorUncheckedUpdateManyWithoutToInput>
  }

  export type UserMonitorUpsertWithoutFromEmailsInput = {
    update: XOR<UserMonitorUpdateWithoutFromEmailsInput, UserMonitorUncheckedUpdateWithoutFromEmailsInput>
    create: XOR<UserMonitorCreateWithoutFromEmailsInput, UserMonitorUncheckedCreateWithoutFromEmailsInput>
  }

  export type UserMonitorUpdateWithoutFromEmailsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    toEmails?: EmailUpdateManyWithoutToNestedInput
    toSlack?: SlackUpdateManyWithoutToNestedInput
    fromSlack?: SlackUpdateManyWithoutFromNestedInput
    Project?: ProjectUpdateManyWithoutMonitorsNestedInput
  }

  export type UserMonitorUncheckedUpdateWithoutFromEmailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    toEmails?: EmailUncheckedUpdateManyWithoutToNestedInput
    toSlack?: SlackUncheckedUpdateManyWithoutToNestedInput
    fromSlack?: SlackUncheckedUpdateManyWithoutFromNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutMonitorsNestedInput
  }

  export type ProjectUpsertWithWhereUniqueWithoutEmailInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutEmailInput, ProjectUncheckedUpdateWithoutEmailInput>
    create: XOR<ProjectCreateWithoutEmailInput, ProjectUncheckedCreateWithoutEmailInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutEmailInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutEmailInput, ProjectUncheckedUpdateWithoutEmailInput>
  }

  export type ProjectUpdateManyWithWhereWithoutEmailInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProjectInput>
  }

  export type UserMonitorCreateWithoutToSlackInput = {
    name: string
    email: string
    slack?: string | null
    date?: Date | string
    toEmails?: EmailCreateNestedManyWithoutToInput
    fromEmails?: EmailCreateNestedManyWithoutFromInput
    fromSlack?: SlackCreateNestedManyWithoutFromInput
    Project?: ProjectCreateNestedManyWithoutMonitorsInput
  }

  export type UserMonitorUncheckedCreateWithoutToSlackInput = {
    id?: number
    name: string
    email: string
    slack?: string | null
    date?: Date | string
    toEmails?: EmailUncheckedCreateNestedManyWithoutToInput
    fromEmails?: EmailUncheckedCreateNestedManyWithoutFromInput
    fromSlack?: SlackUncheckedCreateNestedManyWithoutFromInput
    Project?: ProjectUncheckedCreateNestedManyWithoutMonitorsInput
  }

  export type UserMonitorCreateOrConnectWithoutToSlackInput = {
    where: UserMonitorWhereUniqueInput
    create: XOR<UserMonitorCreateWithoutToSlackInput, UserMonitorUncheckedCreateWithoutToSlackInput>
  }

  export type UserMonitorCreateWithoutFromSlackInput = {
    name: string
    email: string
    slack?: string | null
    date?: Date | string
    toEmails?: EmailCreateNestedManyWithoutToInput
    fromEmails?: EmailCreateNestedManyWithoutFromInput
    toSlack?: SlackCreateNestedManyWithoutToInput
    Project?: ProjectCreateNestedManyWithoutMonitorsInput
  }

  export type UserMonitorUncheckedCreateWithoutFromSlackInput = {
    id?: number
    name: string
    email: string
    slack?: string | null
    date?: Date | string
    toEmails?: EmailUncheckedCreateNestedManyWithoutToInput
    fromEmails?: EmailUncheckedCreateNestedManyWithoutFromInput
    toSlack?: SlackUncheckedCreateNestedManyWithoutToInput
    Project?: ProjectUncheckedCreateNestedManyWithoutMonitorsInput
  }

  export type UserMonitorCreateOrConnectWithoutFromSlackInput = {
    where: UserMonitorWhereUniqueInput
    create: XOR<UserMonitorCreateWithoutFromSlackInput, UserMonitorUncheckedCreateWithoutFromSlackInput>
  }

  export type ProjectCreateWithoutSlackInput = {
    date?: Date | string
    name: string
    elasticIndex: string
    owner: UserCreateNestedOneWithoutProjectInput
    monitors?: UserMonitorCreateNestedManyWithoutProjectInput
    Email?: EmailCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSlackInput = {
    id?: number
    date?: Date | string
    name: string
    elasticIndex: string
    monitors?: UserMonitorUncheckedCreateNestedManyWithoutProjectInput
    userId: number
    emailId?: number | null
  }

  export type ProjectCreateOrConnectWithoutSlackInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSlackInput, ProjectUncheckedCreateWithoutSlackInput>
  }

  export type ProjectCreateManySlackInputEnvelope = {
    data: Enumerable<ProjectCreateManySlackInput>
    skipDuplicates?: boolean
  }

  export type UserMonitorUpsertWithWhereUniqueWithoutToSlackInput = {
    where: UserMonitorWhereUniqueInput
    update: XOR<UserMonitorUpdateWithoutToSlackInput, UserMonitorUncheckedUpdateWithoutToSlackInput>
    create: XOR<UserMonitorCreateWithoutToSlackInput, UserMonitorUncheckedCreateWithoutToSlackInput>
  }

  export type UserMonitorUpdateWithWhereUniqueWithoutToSlackInput = {
    where: UserMonitorWhereUniqueInput
    data: XOR<UserMonitorUpdateWithoutToSlackInput, UserMonitorUncheckedUpdateWithoutToSlackInput>
  }

  export type UserMonitorUpdateManyWithWhereWithoutToSlackInput = {
    where: UserMonitorScalarWhereInput
    data: XOR<UserMonitorUpdateManyMutationInput, UserMonitorUncheckedUpdateManyWithoutToInput>
  }

  export type UserMonitorUpsertWithoutFromSlackInput = {
    update: XOR<UserMonitorUpdateWithoutFromSlackInput, UserMonitorUncheckedUpdateWithoutFromSlackInput>
    create: XOR<UserMonitorCreateWithoutFromSlackInput, UserMonitorUncheckedCreateWithoutFromSlackInput>
  }

  export type UserMonitorUpdateWithoutFromSlackInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    toEmails?: EmailUpdateManyWithoutToNestedInput
    fromEmails?: EmailUpdateManyWithoutFromNestedInput
    toSlack?: SlackUpdateManyWithoutToNestedInput
    Project?: ProjectUpdateManyWithoutMonitorsNestedInput
  }

  export type UserMonitorUncheckedUpdateWithoutFromSlackInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    toEmails?: EmailUncheckedUpdateManyWithoutToNestedInput
    fromEmails?: EmailUncheckedUpdateManyWithoutFromNestedInput
    toSlack?: SlackUncheckedUpdateManyWithoutToNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutMonitorsNestedInput
  }

  export type ProjectUpsertWithWhereUniqueWithoutSlackInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutSlackInput, ProjectUncheckedUpdateWithoutSlackInput>
    create: XOR<ProjectCreateWithoutSlackInput, ProjectUncheckedCreateWithoutSlackInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutSlackInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutSlackInput, ProjectUncheckedUpdateWithoutSlackInput>
  }

  export type ProjectUpdateManyWithWhereWithoutSlackInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateManyOwnerInput = {
    id?: number
    date?: Date | string
    name: string
    elasticIndex: string
    emailId?: number | null
    slackId?: number | null
  }

  export type ProjectUpdateWithoutOwnerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    elasticIndex?: StringFieldUpdateOperationsInput | string
    monitors?: UserMonitorUpdateManyWithoutProjectNestedInput
    Email?: EmailUpdateOneWithoutProjectNestedInput
    Slack?: SlackUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    elasticIndex?: StringFieldUpdateOperationsInput | string
    monitors?: UserMonitorUncheckedUpdateManyWithoutProjectNestedInput
    emailId?: NullableIntFieldUpdateOperationsInput | number | null
    slackId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    elasticIndex?: StringFieldUpdateOperationsInput | string
    emailId?: NullableIntFieldUpdateOperationsInput | number | null
    slackId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserMonitorUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    toEmails?: EmailUpdateManyWithoutToNestedInput
    fromEmails?: EmailUpdateManyWithoutFromNestedInput
    toSlack?: SlackUpdateManyWithoutToNestedInput
    fromSlack?: SlackUpdateManyWithoutFromNestedInput
  }

  export type UserMonitorUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    toEmails?: EmailUncheckedUpdateManyWithoutToNestedInput
    fromEmails?: EmailUncheckedUpdateManyWithoutFromNestedInput
    toSlack?: SlackUncheckedUpdateManyWithoutToNestedInput
    fromSlack?: SlackUncheckedUpdateManyWithoutFromNestedInput
  }

  export type UserMonitorUncheckedUpdateManyWithoutMonitorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailCreateManyFromInput = {
    id?: number
    channel?: string | null
    date: Date | string
    created?: Date | string
    score: number
    magnitude: number
  }

  export type SlackCreateManyFromInput = {
    id?: number
    channel?: string | null
    date: Date | string
    created?: Date | string
    score: number
    magnitude: number
  }

  export type EmailUpdateWithoutToInput = {
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    from?: UserMonitorUpdateOneRequiredWithoutFromEmailsNestedInput
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
    Project?: ProjectUpdateManyWithoutEmailNestedInput
  }

  export type EmailUncheckedUpdateWithoutToInput = {
    id?: IntFieldUpdateOperationsInput | number
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
    Project?: ProjectUncheckedUpdateManyWithoutEmailNestedInput
  }

  export type EmailUncheckedUpdateManyWithoutToEmailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
  }

  export type EmailUpdateWithoutFromInput = {
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    to?: UserMonitorUpdateManyWithoutToEmailsNestedInput
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
    Project?: ProjectUpdateManyWithoutEmailNestedInput
  }

  export type EmailUncheckedUpdateWithoutFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    to?: UserMonitorUncheckedUpdateManyWithoutToEmailsNestedInput
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
    Project?: ProjectUncheckedUpdateManyWithoutEmailNestedInput
  }

  export type EmailUncheckedUpdateManyWithoutFromEmailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
  }

  export type SlackUpdateWithoutToInput = {
    from?: UserMonitorUpdateOneRequiredWithoutFromSlackNestedInput
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
    Project?: ProjectUpdateManyWithoutSlackNestedInput
  }

  export type SlackUncheckedUpdateWithoutToInput = {
    id?: IntFieldUpdateOperationsInput | number
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
    Project?: ProjectUncheckedUpdateManyWithoutSlackNestedInput
  }

  export type SlackUncheckedUpdateManyWithoutToSlackInput = {
    id?: IntFieldUpdateOperationsInput | number
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
  }

  export type SlackUpdateWithoutFromInput = {
    to?: UserMonitorUpdateManyWithoutToSlackNestedInput
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
    Project?: ProjectUpdateManyWithoutSlackNestedInput
  }

  export type SlackUncheckedUpdateWithoutFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    to?: UserMonitorUncheckedUpdateManyWithoutToSlackNestedInput
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
    Project?: ProjectUncheckedUpdateManyWithoutSlackNestedInput
  }

  export type SlackUncheckedUpdateManyWithoutFromSlackInput = {
    id?: IntFieldUpdateOperationsInput | number
    channel?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: FloatFieldUpdateOperationsInput | number
    magnitude?: FloatFieldUpdateOperationsInput | number
  }

  export type ProjectUpdateWithoutMonitorsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    elasticIndex?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutProjectNestedInput
    Email?: EmailUpdateOneWithoutProjectNestedInput
    Slack?: SlackUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMonitorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    elasticIndex?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    emailId?: NullableIntFieldUpdateOperationsInput | number | null
    slackId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectCreateManyEmailInput = {
    id?: number
    date?: Date | string
    name: string
    elasticIndex: string
    userId: number
    slackId?: number | null
  }

  export type UserMonitorUpdateWithoutToEmailsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fromEmails?: EmailUpdateManyWithoutFromNestedInput
    toSlack?: SlackUpdateManyWithoutToNestedInput
    fromSlack?: SlackUpdateManyWithoutFromNestedInput
    Project?: ProjectUpdateManyWithoutMonitorsNestedInput
  }

  export type UserMonitorUncheckedUpdateWithoutToEmailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    fromEmails?: EmailUncheckedUpdateManyWithoutFromNestedInput
    toSlack?: SlackUncheckedUpdateManyWithoutToNestedInput
    fromSlack?: SlackUncheckedUpdateManyWithoutFromNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutMonitorsNestedInput
  }

  export type UserMonitorUncheckedUpdateManyWithoutToInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutEmailInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    elasticIndex?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutProjectNestedInput
    monitors?: UserMonitorUpdateManyWithoutProjectNestedInput
    Slack?: SlackUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutEmailInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    elasticIndex?: StringFieldUpdateOperationsInput | string
    monitors?: UserMonitorUncheckedUpdateManyWithoutProjectNestedInput
    userId?: IntFieldUpdateOperationsInput | number
    slackId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectCreateManySlackInput = {
    id?: number
    date?: Date | string
    name: string
    elasticIndex: string
    userId: number
    emailId?: number | null
  }

  export type UserMonitorUpdateWithoutToSlackInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    toEmails?: EmailUpdateManyWithoutToNestedInput
    fromEmails?: EmailUpdateManyWithoutFromNestedInput
    fromSlack?: SlackUpdateManyWithoutFromNestedInput
    Project?: ProjectUpdateManyWithoutMonitorsNestedInput
  }

  export type UserMonitorUncheckedUpdateWithoutToSlackInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    slack?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    toEmails?: EmailUncheckedUpdateManyWithoutToNestedInput
    fromEmails?: EmailUncheckedUpdateManyWithoutFromNestedInput
    fromSlack?: SlackUncheckedUpdateManyWithoutFromNestedInput
    Project?: ProjectUncheckedUpdateManyWithoutMonitorsNestedInput
  }

  export type ProjectUpdateWithoutSlackInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    elasticIndex?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutProjectNestedInput
    monitors?: UserMonitorUpdateManyWithoutProjectNestedInput
    Email?: EmailUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSlackInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    elasticIndex?: StringFieldUpdateOperationsInput | string
    monitors?: UserMonitorUncheckedUpdateManyWithoutProjectNestedInput
    userId?: IntFieldUpdateOperationsInput | number
    emailId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}