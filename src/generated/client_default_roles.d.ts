import * as runtime from '@prisma/client/runtime/library';
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result
import { 
    AtLeast,
    Extends,
    Has,
    Or,
    GetScalarType, 
    SortOrder, 
    BatchPayload,
    FieldRef,
    False,
    Keys,
    ExcludeUnderscoreKeys,
    Subset, 
    SelectSubset,
    InputJsonValue,
    JsonNullValueInput,
    JsonFilter,
    StringFilter,
    IntFilter,
    StringFieldUpdateOperationsInput,
    IntFieldUpdateOperationsInput,
    JsonWithAggregatesFilter,
    StringWithAggregatesFilter,
    IntWithAggregatesFilter,
    JsonValue,
    PrismaPromise,
    PickEnumerable,
    TypeMap,
    SubsetIntersection,
    True,
    MaybeTupleToUnion,
    GetHavingFields,
    XOR,


 } from "./utils"

export type client_default_roles = $Result.DefaultSelection<$client_default_rolesPayload>


/**
   * Model client_default_roles
   */

export type AggregateClient_default_roles = {
    _count: Client_default_rolesCountAggregateOutputType | null
    _avg: Client_default_rolesAvgAggregateOutputType | null
    _sum: Client_default_rolesSumAggregateOutputType | null
    _min: Client_default_rolesMinAggregateOutputType | null
    _max: Client_default_rolesMaxAggregateOutputType | null
  }

  export type Client_default_rolesAvgAggregateOutputType = {
    id: number | null
  }

  export type Client_default_rolesSumAggregateOutputType = {
    id: number | null
  }

  export type Client_default_rolesMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_default_rolesMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_default_rolesCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Client_default_rolesAvgAggregateInputType = {
    id?: true
  }

  export type Client_default_rolesSumAggregateInputType = {
    id?: true
  }

  export type Client_default_rolesMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_default_rolesMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_default_rolesCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Client_default_rolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_default_roles to aggregate.
     */
    where?: client_default_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_default_roless to fetch.
     */
    orderBy?: client_default_rolesOrderByWithRelationInput | client_default_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: client_default_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_default_roless from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_default_roless.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned client_default_roless
    **/
    _count?: true | Client_default_rolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Client_default_rolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Client_default_rolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Client_default_rolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Client_default_rolesMaxAggregateInputType
  }

  export type GetClient_default_rolesAggregateType<T extends Client_default_rolesAggregateArgs> = {
        [P in keyof T & keyof AggregateClient_default_roles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient_default_roles[P]>
      : GetScalarType<T[P], AggregateClient_default_roles[P]>
  }




  export type client_default_rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: client_default_rolesWhereInput
    orderBy?: client_default_rolesOrderByWithAggregationInput | client_default_rolesOrderByWithAggregationInput[]
    by: Client_default_rolesScalarFieldEnum[] | Client_default_rolesScalarFieldEnum
    having?: client_default_rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Client_default_rolesCountAggregateInputType | true
    _avg?: Client_default_rolesAvgAggregateInputType
    _sum?: Client_default_rolesSumAggregateInputType
    _min?: Client_default_rolesMinAggregateInputType
    _max?: Client_default_rolesMaxAggregateInputType
  }

  export type Client_default_rolesGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Client_default_rolesCountAggregateOutputType | null
    _avg: Client_default_rolesAvgAggregateOutputType | null
    _sum: Client_default_rolesSumAggregateOutputType | null
    _min: Client_default_rolesMinAggregateOutputType | null
    _max: Client_default_rolesMaxAggregateOutputType | null
  }

  type GetClient_default_rolesGroupByPayload<T extends client_default_rolesGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Client_default_rolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Client_default_rolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Client_default_rolesGroupByOutputType[P]>
            : GetScalarType<T[P], Client_default_rolesGroupByOutputType[P]>
        }
      >
    >


  export type client_default_rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["client_default_roles"]>

  export type client_default_rolesSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $client_default_rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "client_default_roles"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["client_default_roles"]>
    composites: {}
  }


  type client_default_rolesGetPayload<S extends boolean | null | undefined | client_default_rolesDefaultArgs> = $Result.GetResult<$client_default_rolesPayload, S>

  type client_default_rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<client_default_rolesFindManyArgs, 'select' | 'include'> & {
      select?: Client_default_rolesCountAggregateInputType | true
    }

  export interface client_default_rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['client_default_roles'], meta: { name: 'client_default_roles' } }
    /**
     * Find zero or one Client_default_roles that matches the filter.
     * @param {client_default_rolesFindUniqueArgs} args - Arguments to find a Client_default_roles
     * @example
     * // Get one Client_default_roles
     * const client_default_roles = await prisma.client_default_roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends client_default_rolesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, client_default_rolesFindUniqueArgs<ExtArgs>>
    ): Prisma__client_default_rolesClient<$Result.GetResult<$client_default_rolesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client_default_roles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {client_default_rolesFindUniqueOrThrowArgs} args - Arguments to find a Client_default_roles
     * @example
     * // Get one Client_default_roles
     * const client_default_roles = await prisma.client_default_roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends client_default_rolesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_default_rolesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__client_default_rolesClient<$Result.GetResult<$client_default_rolesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Client_default_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_default_rolesFindFirstArgs} args - Arguments to find a Client_default_roles
     * @example
     * // Get one Client_default_roles
     * const client_default_roles = await prisma.client_default_roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends client_default_rolesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, client_default_rolesFindFirstArgs<ExtArgs>>
    ): Prisma__client_default_rolesClient<$Result.GetResult<$client_default_rolesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Client_default_roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_default_rolesFindFirstOrThrowArgs} args - Arguments to find a Client_default_roles
     * @example
     * // Get one Client_default_roles
     * const client_default_roles = await prisma.client_default_roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends client_default_rolesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_default_rolesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__client_default_rolesClient<$Result.GetResult<$client_default_rolesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Client_default_roless that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_default_rolesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Client_default_roless
     * const client_default_roless = await prisma.client_default_roles.findMany()
     * 
     * // Get first 10 Client_default_roless
     * const client_default_roless = await prisma.client_default_roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const client_default_rolesWithIdOnly = await prisma.client_default_roles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends client_default_rolesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_default_rolesFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$client_default_rolesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Client_default_roles.
     * @param {client_default_rolesCreateArgs} args - Arguments to create a Client_default_roles.
     * @example
     * // Create one Client_default_roles
     * const Client_default_roles = await prisma.client_default_roles.create({
     *   data: {
     *     // ... data to create a Client_default_roles
     *   }
     * })
     * 
    **/
    create<T extends client_default_rolesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, client_default_rolesCreateArgs<ExtArgs>>
    ): Prisma__client_default_rolesClient<$Result.GetResult<$client_default_rolesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Client_default_roless.
     *     @param {client_default_rolesCreateManyArgs} args - Arguments to create many Client_default_roless.
     *     @example
     *     // Create many Client_default_roless
     *     const client_default_roles = await prisma.client_default_roles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends client_default_rolesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_default_rolesCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Client_default_roles.
     * @param {client_default_rolesDeleteArgs} args - Arguments to delete one Client_default_roles.
     * @example
     * // Delete one Client_default_roles
     * const Client_default_roles = await prisma.client_default_roles.delete({
     *   where: {
     *     // ... filter to delete one Client_default_roles
     *   }
     * })
     * 
    **/
    delete<T extends client_default_rolesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, client_default_rolesDeleteArgs<ExtArgs>>
    ): Prisma__client_default_rolesClient<$Result.GetResult<$client_default_rolesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Client_default_roles.
     * @param {client_default_rolesUpdateArgs} args - Arguments to update one Client_default_roles.
     * @example
     * // Update one Client_default_roles
     * const client_default_roles = await prisma.client_default_roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends client_default_rolesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, client_default_rolesUpdateArgs<ExtArgs>>
    ): Prisma__client_default_rolesClient<$Result.GetResult<$client_default_rolesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Client_default_roless.
     * @param {client_default_rolesDeleteManyArgs} args - Arguments to filter Client_default_roless to delete.
     * @example
     * // Delete a few Client_default_roless
     * const { count } = await prisma.client_default_roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends client_default_rolesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_default_rolesDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Client_default_roless.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_default_rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Client_default_roless
     * const client_default_roles = await prisma.client_default_roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends client_default_rolesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, client_default_rolesUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Client_default_roles.
     * @param {client_default_rolesUpsertArgs} args - Arguments to update or create a Client_default_roles.
     * @example
     * // Update or create a Client_default_roles
     * const client_default_roles = await prisma.client_default_roles.upsert({
     *   create: {
     *     // ... data to create a Client_default_roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client_default_roles we want to update
     *   }
     * })
    **/
    upsert<T extends client_default_rolesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, client_default_rolesUpsertArgs<ExtArgs>>
    ): Prisma__client_default_rolesClient<$Result.GetResult<$client_default_rolesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Client_default_roless.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_default_rolesCountArgs} args - Arguments to filter Client_default_roless to count.
     * @example
     * // Count the number of Client_default_roless
     * const count = await prisma.client_default_roles.count({
     *   where: {
     *     // ... the filter for the Client_default_roless we want to count
     *   }
     * })
    **/
    count<T extends client_default_rolesCountArgs>(
      args?: Subset<T, client_default_rolesCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Client_default_rolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client_default_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Client_default_rolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Client_default_rolesAggregateArgs>(args: Subset<T, Client_default_rolesAggregateArgs>): PrismaPromise<GetClient_default_rolesAggregateType<T>>

    /**
     * Group by Client_default_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_default_rolesGroupByArgs} args - Group by arguments.
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
      T extends client_default_rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: client_default_rolesGroupByArgs['orderBy'] }
        : { orderBy?: client_default_rolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, client_default_rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClient_default_rolesGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the client_default_roles model
   */
  readonly fields: client_default_rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client_default_roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__client_default_rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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



  /**
   * Fields of the client_default_roles model
   */ 
  interface client_default_rolesFieldRefs {
    readonly id: FieldRef<"client_default_roles", 'Int'>
    readonly domain: FieldRef<"client_default_roles", 'String'>
    readonly props: FieldRef<"client_default_roles", 'Json'>
    readonly groups: FieldRef<"client_default_roles", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * client_default_roles findUnique
   */
  export type client_default_rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_default_roles
     */
    select?: client_default_rolesSelect<ExtArgs> | null
    /**
     * Filter, which client_default_roles to fetch.
     */
    where: client_default_rolesWhereUniqueInput
  }


  /**
   * client_default_roles findUniqueOrThrow
   */
  export type client_default_rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_default_roles
     */
    select?: client_default_rolesSelect<ExtArgs> | null
    /**
     * Filter, which client_default_roles to fetch.
     */
    where: client_default_rolesWhereUniqueInput
  }


  /**
   * client_default_roles findFirst
   */
  export type client_default_rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_default_roles
     */
    select?: client_default_rolesSelect<ExtArgs> | null
    /**
     * Filter, which client_default_roles to fetch.
     */
    where?: client_default_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_default_roless to fetch.
     */
    orderBy?: client_default_rolesOrderByWithRelationInput | client_default_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_default_roless.
     */
    cursor?: client_default_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_default_roless from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_default_roless.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_default_roless.
     */
    distinct?: Client_default_rolesScalarFieldEnum | Client_default_rolesScalarFieldEnum[]
  }


  /**
   * client_default_roles findFirstOrThrow
   */
  export type client_default_rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_default_roles
     */
    select?: client_default_rolesSelect<ExtArgs> | null
    /**
     * Filter, which client_default_roles to fetch.
     */
    where?: client_default_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_default_roless to fetch.
     */
    orderBy?: client_default_rolesOrderByWithRelationInput | client_default_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_default_roless.
     */
    cursor?: client_default_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_default_roless from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_default_roless.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_default_roless.
     */
    distinct?: Client_default_rolesScalarFieldEnum | Client_default_rolesScalarFieldEnum[]
  }


  /**
   * client_default_roles findMany
   */
  export type client_default_rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_default_roles
     */
    select?: client_default_rolesSelect<ExtArgs> | null
    /**
     * Filter, which client_default_roless to fetch.
     */
    where?: client_default_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_default_roless to fetch.
     */
    orderBy?: client_default_rolesOrderByWithRelationInput | client_default_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing client_default_roless.
     */
    cursor?: client_default_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_default_roless from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_default_roless.
     */
    skip?: number
    distinct?: Client_default_rolesScalarFieldEnum | Client_default_rolesScalarFieldEnum[]
  }


  /**
   * client_default_roles create
   */
  export type client_default_rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_default_roles
     */
    select?: client_default_rolesSelect<ExtArgs> | null
    /**
     * The data needed to create a client_default_roles.
     */
    data: XOR<client_default_rolesCreateInput, client_default_rolesUncheckedCreateInput>
  }


  /**
   * client_default_roles createMany
   */
  export type client_default_rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many client_default_roless.
     */
    data: client_default_rolesCreateManyInput | client_default_rolesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * client_default_roles update
   */
  export type client_default_rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_default_roles
     */
    select?: client_default_rolesSelect<ExtArgs> | null
    /**
     * The data needed to update a client_default_roles.
     */
    data: XOR<client_default_rolesUpdateInput, client_default_rolesUncheckedUpdateInput>
    /**
     * Choose, which client_default_roles to update.
     */
    where: client_default_rolesWhereUniqueInput
  }


  /**
   * client_default_roles updateMany
   */
  export type client_default_rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update client_default_roless.
     */
    data: XOR<client_default_rolesUpdateManyMutationInput, client_default_rolesUncheckedUpdateManyInput>
    /**
     * Filter which client_default_roless to update
     */
    where?: client_default_rolesWhereInput
  }


  /**
   * client_default_roles upsert
   */
  export type client_default_rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_default_roles
     */
    select?: client_default_rolesSelect<ExtArgs> | null
    /**
     * The filter to search for the client_default_roles to update in case it exists.
     */
    where: client_default_rolesWhereUniqueInput
    /**
     * In case the client_default_roles found by the `where` argument doesn't exist, create a new client_default_roles with this data.
     */
    create: XOR<client_default_rolesCreateInput, client_default_rolesUncheckedCreateInput>
    /**
     * In case the client_default_roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<client_default_rolesUpdateInput, client_default_rolesUncheckedUpdateInput>
  }


  /**
   * client_default_roles delete
   */
  export type client_default_rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_default_roles
     */
    select?: client_default_rolesSelect<ExtArgs> | null
    /**
     * Filter which client_default_roles to delete.
     */
    where: client_default_rolesWhereUniqueInput
  }


  /**
   * client_default_roles deleteMany
   */
  export type client_default_rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_default_roless to delete
     */
    where?: client_default_rolesWhereInput
  }


  /**
   * client_default_roles without action
   */
  export type client_default_rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_default_roles
     */
    select?: client_default_rolesSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type client_default_rolesWhereInput = {
    AND?: client_default_rolesWhereInput | client_default_rolesWhereInput[]
    OR?: client_default_rolesWhereInput[]
    NOT?: client_default_rolesWhereInput | client_default_rolesWhereInput[]
    id?: IntFilter<"client_default_roles"> | number
    domain?: StringFilter<"client_default_roles"> | string
    props?: JsonFilter<"client_default_roles">
    groups?: JsonFilter<"client_default_roles">
  }

  export type client_default_rolesOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_default_rolesWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: client_default_rolesWhereInput | client_default_rolesWhereInput[]
    OR?: client_default_rolesWhereInput[]
    NOT?: client_default_rolesWhereInput | client_default_rolesWhereInput[]
    props?: JsonFilter<"client_default_roles">
    groups?: JsonFilter<"client_default_roles">
  }, "id" | "domain">

  export type client_default_rolesOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: client_default_rolesCountOrderByAggregateInput
    _avg?: client_default_rolesAvgOrderByAggregateInput
    _max?: client_default_rolesMaxOrderByAggregateInput
    _min?: client_default_rolesMinOrderByAggregateInput
    _sum?: client_default_rolesSumOrderByAggregateInput
  }

  export type client_default_rolesScalarWhereWithAggregatesInput = {
    AND?: client_default_rolesScalarWhereWithAggregatesInput | client_default_rolesScalarWhereWithAggregatesInput[]
    OR?: client_default_rolesScalarWhereWithAggregatesInput[]
    NOT?: client_default_rolesScalarWhereWithAggregatesInput | client_default_rolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"client_default_roles"> | number
    domain?: StringWithAggregatesFilter<"client_default_roles"> | string
    props?: JsonWithAggregatesFilter<"client_default_roles">
    groups?: JsonWithAggregatesFilter<"client_default_roles">
  }

  export type client_default_rolesCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_default_rolesUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_default_rolesUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_default_rolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_default_rolesCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_default_rolesUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_default_rolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_default_rolesCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_default_rolesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type client_default_rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_default_rolesMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_default_rolesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use client_default_rolesDefaultArgs instead
     */
    export type client_default_rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = client_default_rolesDefaultArgs<ExtArgs>

    export const Client_default_rolesScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Client_default_rolesScalarFieldEnum = (typeof Client_default_rolesScalarFieldEnum)[keyof typeof Client_default_rolesScalarFieldEnum]
    