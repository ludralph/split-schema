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

export type client_node_registrations = $Result.DefaultSelection<$client_node_registrationsPayload>


/**
   * Model client_node_registrations
   */

export type AggregateClient_node_registrations = {
    _count: Client_node_registrationsCountAggregateOutputType | null
    _avg: Client_node_registrationsAvgAggregateOutputType | null
    _sum: Client_node_registrationsSumAggregateOutputType | null
    _min: Client_node_registrationsMinAggregateOutputType | null
    _max: Client_node_registrationsMaxAggregateOutputType | null
  }

  export type Client_node_registrationsAvgAggregateOutputType = {
    id: number | null
  }

  export type Client_node_registrationsSumAggregateOutputType = {
    id: number | null
  }

  export type Client_node_registrationsMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_node_registrationsMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_node_registrationsCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Client_node_registrationsAvgAggregateInputType = {
    id?: true
  }

  export type Client_node_registrationsSumAggregateInputType = {
    id?: true
  }

  export type Client_node_registrationsMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_node_registrationsMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_node_registrationsCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Client_node_registrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_node_registrations to aggregate.
     */
    where?: client_node_registrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_node_registrationss to fetch.
     */
    orderBy?: client_node_registrationsOrderByWithRelationInput | client_node_registrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: client_node_registrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_node_registrationss from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_node_registrationss.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned client_node_registrationss
    **/
    _count?: true | Client_node_registrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Client_node_registrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Client_node_registrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Client_node_registrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Client_node_registrationsMaxAggregateInputType
  }

  export type GetClient_node_registrationsAggregateType<T extends Client_node_registrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateClient_node_registrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient_node_registrations[P]>
      : GetScalarType<T[P], AggregateClient_node_registrations[P]>
  }




  export type client_node_registrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: client_node_registrationsWhereInput
    orderBy?: client_node_registrationsOrderByWithAggregationInput | client_node_registrationsOrderByWithAggregationInput[]
    by: Client_node_registrationsScalarFieldEnum[] | Client_node_registrationsScalarFieldEnum
    having?: client_node_registrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Client_node_registrationsCountAggregateInputType | true
    _avg?: Client_node_registrationsAvgAggregateInputType
    _sum?: Client_node_registrationsSumAggregateInputType
    _min?: Client_node_registrationsMinAggregateInputType
    _max?: Client_node_registrationsMaxAggregateInputType
  }

  export type Client_node_registrationsGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Client_node_registrationsCountAggregateOutputType | null
    _avg: Client_node_registrationsAvgAggregateOutputType | null
    _sum: Client_node_registrationsSumAggregateOutputType | null
    _min: Client_node_registrationsMinAggregateOutputType | null
    _max: Client_node_registrationsMaxAggregateOutputType | null
  }

  type GetClient_node_registrationsGroupByPayload<T extends client_node_registrationsGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Client_node_registrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Client_node_registrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Client_node_registrationsGroupByOutputType[P]>
            : GetScalarType<T[P], Client_node_registrationsGroupByOutputType[P]>
        }
      >
    >


  export type client_node_registrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["client_node_registrations"]>

  export type client_node_registrationsSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $client_node_registrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "client_node_registrations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["client_node_registrations"]>
    composites: {}
  }


  type client_node_registrationsGetPayload<S extends boolean | null | undefined | client_node_registrationsDefaultArgs> = $Result.GetResult<$client_node_registrationsPayload, S>

  type client_node_registrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<client_node_registrationsFindManyArgs, 'select' | 'include'> & {
      select?: Client_node_registrationsCountAggregateInputType | true
    }

  export interface client_node_registrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['client_node_registrations'], meta: { name: 'client_node_registrations' } }
    /**
     * Find zero or one Client_node_registrations that matches the filter.
     * @param {client_node_registrationsFindUniqueArgs} args - Arguments to find a Client_node_registrations
     * @example
     * // Get one Client_node_registrations
     * const client_node_registrations = await prisma.client_node_registrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends client_node_registrationsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, client_node_registrationsFindUniqueArgs<ExtArgs>>
    ): Prisma__client_node_registrationsClient<$Result.GetResult<$client_node_registrationsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client_node_registrations that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {client_node_registrationsFindUniqueOrThrowArgs} args - Arguments to find a Client_node_registrations
     * @example
     * // Get one Client_node_registrations
     * const client_node_registrations = await prisma.client_node_registrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends client_node_registrationsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_node_registrationsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__client_node_registrationsClient<$Result.GetResult<$client_node_registrationsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Client_node_registrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_node_registrationsFindFirstArgs} args - Arguments to find a Client_node_registrations
     * @example
     * // Get one Client_node_registrations
     * const client_node_registrations = await prisma.client_node_registrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends client_node_registrationsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, client_node_registrationsFindFirstArgs<ExtArgs>>
    ): Prisma__client_node_registrationsClient<$Result.GetResult<$client_node_registrationsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Client_node_registrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_node_registrationsFindFirstOrThrowArgs} args - Arguments to find a Client_node_registrations
     * @example
     * // Get one Client_node_registrations
     * const client_node_registrations = await prisma.client_node_registrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends client_node_registrationsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_node_registrationsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__client_node_registrationsClient<$Result.GetResult<$client_node_registrationsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Client_node_registrationss that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_node_registrationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Client_node_registrationss
     * const client_node_registrationss = await prisma.client_node_registrations.findMany()
     * 
     * // Get first 10 Client_node_registrationss
     * const client_node_registrationss = await prisma.client_node_registrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const client_node_registrationsWithIdOnly = await prisma.client_node_registrations.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends client_node_registrationsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_node_registrationsFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$client_node_registrationsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Client_node_registrations.
     * @param {client_node_registrationsCreateArgs} args - Arguments to create a Client_node_registrations.
     * @example
     * // Create one Client_node_registrations
     * const Client_node_registrations = await prisma.client_node_registrations.create({
     *   data: {
     *     // ... data to create a Client_node_registrations
     *   }
     * })
     * 
    **/
    create<T extends client_node_registrationsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, client_node_registrationsCreateArgs<ExtArgs>>
    ): Prisma__client_node_registrationsClient<$Result.GetResult<$client_node_registrationsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Client_node_registrationss.
     *     @param {client_node_registrationsCreateManyArgs} args - Arguments to create many Client_node_registrationss.
     *     @example
     *     // Create many Client_node_registrationss
     *     const client_node_registrations = await prisma.client_node_registrations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends client_node_registrationsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_node_registrationsCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Client_node_registrations.
     * @param {client_node_registrationsDeleteArgs} args - Arguments to delete one Client_node_registrations.
     * @example
     * // Delete one Client_node_registrations
     * const Client_node_registrations = await prisma.client_node_registrations.delete({
     *   where: {
     *     // ... filter to delete one Client_node_registrations
     *   }
     * })
     * 
    **/
    delete<T extends client_node_registrationsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, client_node_registrationsDeleteArgs<ExtArgs>>
    ): Prisma__client_node_registrationsClient<$Result.GetResult<$client_node_registrationsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Client_node_registrations.
     * @param {client_node_registrationsUpdateArgs} args - Arguments to update one Client_node_registrations.
     * @example
     * // Update one Client_node_registrations
     * const client_node_registrations = await prisma.client_node_registrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends client_node_registrationsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, client_node_registrationsUpdateArgs<ExtArgs>>
    ): Prisma__client_node_registrationsClient<$Result.GetResult<$client_node_registrationsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Client_node_registrationss.
     * @param {client_node_registrationsDeleteManyArgs} args - Arguments to filter Client_node_registrationss to delete.
     * @example
     * // Delete a few Client_node_registrationss
     * const { count } = await prisma.client_node_registrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends client_node_registrationsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_node_registrationsDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Client_node_registrationss.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_node_registrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Client_node_registrationss
     * const client_node_registrations = await prisma.client_node_registrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends client_node_registrationsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, client_node_registrationsUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Client_node_registrations.
     * @param {client_node_registrationsUpsertArgs} args - Arguments to update or create a Client_node_registrations.
     * @example
     * // Update or create a Client_node_registrations
     * const client_node_registrations = await prisma.client_node_registrations.upsert({
     *   create: {
     *     // ... data to create a Client_node_registrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client_node_registrations we want to update
     *   }
     * })
    **/
    upsert<T extends client_node_registrationsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, client_node_registrationsUpsertArgs<ExtArgs>>
    ): Prisma__client_node_registrationsClient<$Result.GetResult<$client_node_registrationsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Client_node_registrationss.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_node_registrationsCountArgs} args - Arguments to filter Client_node_registrationss to count.
     * @example
     * // Count the number of Client_node_registrationss
     * const count = await prisma.client_node_registrations.count({
     *   where: {
     *     // ... the filter for the Client_node_registrationss we want to count
     *   }
     * })
    **/
    count<T extends client_node_registrationsCountArgs>(
      args?: Subset<T, client_node_registrationsCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Client_node_registrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client_node_registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Client_node_registrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Client_node_registrationsAggregateArgs>(args: Subset<T, Client_node_registrationsAggregateArgs>): PrismaPromise<GetClient_node_registrationsAggregateType<T>>

    /**
     * Group by Client_node_registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_node_registrationsGroupByArgs} args - Group by arguments.
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
      T extends client_node_registrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: client_node_registrationsGroupByArgs['orderBy'] }
        : { orderBy?: client_node_registrationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, client_node_registrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClient_node_registrationsGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the client_node_registrations model
   */
  readonly fields: client_node_registrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client_node_registrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__client_node_registrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
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
   * Fields of the client_node_registrations model
   */ 
  interface client_node_registrationsFieldRefs {
    readonly id: FieldRef<"client_node_registrations", 'Int'>
    readonly domain: FieldRef<"client_node_registrations", 'String'>
    readonly props: FieldRef<"client_node_registrations", 'Json'>
    readonly groups: FieldRef<"client_node_registrations", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * client_node_registrations findUnique
   */
  export type client_node_registrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_node_registrations
     */
    select?: client_node_registrationsSelect<ExtArgs> | null
    /**
     * Filter, which client_node_registrations to fetch.
     */
    where: client_node_registrationsWhereUniqueInput
  }


  /**
   * client_node_registrations findUniqueOrThrow
   */
  export type client_node_registrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_node_registrations
     */
    select?: client_node_registrationsSelect<ExtArgs> | null
    /**
     * Filter, which client_node_registrations to fetch.
     */
    where: client_node_registrationsWhereUniqueInput
  }


  /**
   * client_node_registrations findFirst
   */
  export type client_node_registrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_node_registrations
     */
    select?: client_node_registrationsSelect<ExtArgs> | null
    /**
     * Filter, which client_node_registrations to fetch.
     */
    where?: client_node_registrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_node_registrationss to fetch.
     */
    orderBy?: client_node_registrationsOrderByWithRelationInput | client_node_registrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_node_registrationss.
     */
    cursor?: client_node_registrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_node_registrationss from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_node_registrationss.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_node_registrationss.
     */
    distinct?: Client_node_registrationsScalarFieldEnum | Client_node_registrationsScalarFieldEnum[]
  }


  /**
   * client_node_registrations findFirstOrThrow
   */
  export type client_node_registrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_node_registrations
     */
    select?: client_node_registrationsSelect<ExtArgs> | null
    /**
     * Filter, which client_node_registrations to fetch.
     */
    where?: client_node_registrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_node_registrationss to fetch.
     */
    orderBy?: client_node_registrationsOrderByWithRelationInput | client_node_registrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_node_registrationss.
     */
    cursor?: client_node_registrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_node_registrationss from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_node_registrationss.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_node_registrationss.
     */
    distinct?: Client_node_registrationsScalarFieldEnum | Client_node_registrationsScalarFieldEnum[]
  }


  /**
   * client_node_registrations findMany
   */
  export type client_node_registrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_node_registrations
     */
    select?: client_node_registrationsSelect<ExtArgs> | null
    /**
     * Filter, which client_node_registrationss to fetch.
     */
    where?: client_node_registrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_node_registrationss to fetch.
     */
    orderBy?: client_node_registrationsOrderByWithRelationInput | client_node_registrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing client_node_registrationss.
     */
    cursor?: client_node_registrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_node_registrationss from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_node_registrationss.
     */
    skip?: number
    distinct?: Client_node_registrationsScalarFieldEnum | Client_node_registrationsScalarFieldEnum[]
  }


  /**
   * client_node_registrations create
   */
  export type client_node_registrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_node_registrations
     */
    select?: client_node_registrationsSelect<ExtArgs> | null
    /**
     * The data needed to create a client_node_registrations.
     */
    data: XOR<client_node_registrationsCreateInput, client_node_registrationsUncheckedCreateInput>
  }


  /**
   * client_node_registrations createMany
   */
  export type client_node_registrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many client_node_registrationss.
     */
    data: client_node_registrationsCreateManyInput | client_node_registrationsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * client_node_registrations update
   */
  export type client_node_registrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_node_registrations
     */
    select?: client_node_registrationsSelect<ExtArgs> | null
    /**
     * The data needed to update a client_node_registrations.
     */
    data: XOR<client_node_registrationsUpdateInput, client_node_registrationsUncheckedUpdateInput>
    /**
     * Choose, which client_node_registrations to update.
     */
    where: client_node_registrationsWhereUniqueInput
  }


  /**
   * client_node_registrations updateMany
   */
  export type client_node_registrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update client_node_registrationss.
     */
    data: XOR<client_node_registrationsUpdateManyMutationInput, client_node_registrationsUncheckedUpdateManyInput>
    /**
     * Filter which client_node_registrationss to update
     */
    where?: client_node_registrationsWhereInput
  }


  /**
   * client_node_registrations upsert
   */
  export type client_node_registrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_node_registrations
     */
    select?: client_node_registrationsSelect<ExtArgs> | null
    /**
     * The filter to search for the client_node_registrations to update in case it exists.
     */
    where: client_node_registrationsWhereUniqueInput
    /**
     * In case the client_node_registrations found by the `where` argument doesn't exist, create a new client_node_registrations with this data.
     */
    create: XOR<client_node_registrationsCreateInput, client_node_registrationsUncheckedCreateInput>
    /**
     * In case the client_node_registrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<client_node_registrationsUpdateInput, client_node_registrationsUncheckedUpdateInput>
  }


  /**
   * client_node_registrations delete
   */
  export type client_node_registrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_node_registrations
     */
    select?: client_node_registrationsSelect<ExtArgs> | null
    /**
     * Filter which client_node_registrations to delete.
     */
    where: client_node_registrationsWhereUniqueInput
  }


  /**
   * client_node_registrations deleteMany
   */
  export type client_node_registrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_node_registrationss to delete
     */
    where?: client_node_registrationsWhereInput
  }


  /**
   * client_node_registrations without action
   */
  export type client_node_registrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_node_registrations
     */
    select?: client_node_registrationsSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type client_node_registrationsWhereInput = {
    AND?: client_node_registrationsWhereInput | client_node_registrationsWhereInput[]
    OR?: client_node_registrationsWhereInput[]
    NOT?: client_node_registrationsWhereInput | client_node_registrationsWhereInput[]
    id?: IntFilter<"client_node_registrations"> | number
    domain?: StringFilter<"client_node_registrations"> | string
    props?: JsonFilter<"client_node_registrations">
    groups?: JsonFilter<"client_node_registrations">
  }

  export type client_node_registrationsOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_node_registrationsWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: client_node_registrationsWhereInput | client_node_registrationsWhereInput[]
    OR?: client_node_registrationsWhereInput[]
    NOT?: client_node_registrationsWhereInput | client_node_registrationsWhereInput[]
    props?: JsonFilter<"client_node_registrations">
    groups?: JsonFilter<"client_node_registrations">
  }, "id" | "domain">

  export type client_node_registrationsOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: client_node_registrationsCountOrderByAggregateInput
    _avg?: client_node_registrationsAvgOrderByAggregateInput
    _max?: client_node_registrationsMaxOrderByAggregateInput
    _min?: client_node_registrationsMinOrderByAggregateInput
    _sum?: client_node_registrationsSumOrderByAggregateInput
  }

  export type client_node_registrationsScalarWhereWithAggregatesInput = {
    AND?: client_node_registrationsScalarWhereWithAggregatesInput | client_node_registrationsScalarWhereWithAggregatesInput[]
    OR?: client_node_registrationsScalarWhereWithAggregatesInput[]
    NOT?: client_node_registrationsScalarWhereWithAggregatesInput | client_node_registrationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"client_node_registrations"> | number
    domain?: StringWithAggregatesFilter<"client_node_registrations"> | string
    props?: JsonWithAggregatesFilter<"client_node_registrations">
    groups?: JsonWithAggregatesFilter<"client_node_registrations">
  }

  export type client_node_registrationsCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_node_registrationsUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_node_registrationsUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_node_registrationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_node_registrationsCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_node_registrationsUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_node_registrationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_node_registrationsCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_node_registrationsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type client_node_registrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_node_registrationsMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_node_registrationsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use client_node_registrationsDefaultArgs instead
     */
    export type client_node_registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = client_node_registrationsDefaultArgs<ExtArgs>

    export const Client_node_registrationsScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Client_node_registrationsScalarFieldEnum = (typeof Client_node_registrationsScalarFieldEnum)[keyof typeof Client_node_registrationsScalarFieldEnum]
    